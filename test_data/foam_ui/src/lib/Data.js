
export class RecordData {

    constructor(config, searchParams, context) {
        this.config = config;
        this.source = config.source;
        this.context = context;
        this.params = searchParams;
    }

    load = async () => {
        var record = null;
        if (this.config.newEntry !== 'Always' && Object.keys(this.params).length > 0) {
            record = await this.context.getRecord(
                this.source,
                this.params);
        }

        if (!record) {
            const fields = this.context.schema[this.source].fields;
            record = Object.assign({}, ...Object.keys(fields).map((f) => (
                {[f]: this.params[f] ? this.params[f] : null}
            ))) 
        }
        this.context.setState(record)
    }

    update = (field, value) => {
        var data = this.context.getState();
        data[field] = value;
        this.context.setState(data)
    }

    save = () => {
        return this.context.saveRecord(this.source, this.context.getState()).then((record) =>{
            this.context.setState(record)
            return record;
        });
    }
}

const fieldFilters = {
    STRING: [
        {display: 'contains', value: 'contains'},
        {display: '=', value: ''},
    ],
    TEXT: [
        {display: 'contains', value: 'contains'},
        {display: '=', value: ''},
    ],
    DATE: [
        {display: '=', value: ''},
        {display: 'before', value: 'lte'},
        {display: 'after', value: 'gte'},
    ],
    INTEGER: [
        {display: '=', value: ''},
        {display: '<', value: 'lt'},
        {display: '>', value: 'gt'},
        {display: '=<', value: 'lte'},
        {display: '>=', value: 'gte'},
    ],
    ref: [{display: '=', value: 'id'},],
    enum: [{display: '=', value: ''},],
    doc: [{display: '=', value: ''},],
}

export class TableData {

    constructor(config, searchParams, context) {
        this.config = config;
        this.source = config.source;
        this.context = context;
        this.schema = this.context.schema[this.source];
        this.params = searchParams ? searchParams : {}
        this.params._internal = this.parseParams(searchParams);
    }

    parseParams(params) {
        if (params._internal) { return params._internal; }  // Shouldn't need this...
        var internal = []
        Object.keys(params).forEach((k) => {
            const s = k.split('__');
            if (this.schema[s[0]]) {
                internal.push({...this.newParam(s[0]), filter: s[1] ? s[1] : '', value: params[k]})
            }
        })
        return internal
    }

    update = (value) => {
        this.context.setState(value);
    }

    searchParams() {
        return Object.assign({}, this.params,
            Object.assign({}, ...this.params._internal.map((s) => (this.getSearchDict(s)))))
    }

    getSearchDict(param) {
        const key = (param.filter === '') ? param.field : `${param.field}__${param.filter}`;
        const value = param.value.id ? param.value.id : param.value;
        return {[key]: value}
    }

    newParam(name) {
        const field = this.schema.fields[name];
        const fieldType = field.fieldType;
        return {
            field: name,
            filter: fieldFilters[fieldType][0].value,
            filters: fieldFilters[fieldType],
            value: ''
        }
    }

    addParam = () => {
        this.params._internal.push(this.newParam(Object.keys(this.schema.fields)[0]))
        this.context.setParams(this.params)
    }

    changeParamField = (index, value) => {
        this.params._internal[index] = this.newParam(value)
        this.context.setParams(this.params)
    }

    changeParamFilter = (index, value) => {
        var param = this.params._internal[index]
        param.filter = value
        this.context.setParams(this.params)
    }

    changeParamValue = (index, value) => {
        var param = this.params._internal[index]
        param.value = value
        this.context.setParams(this.params)
    }

    load = async (allData) => {
        const params = this.config.paramsFn ? this.config.paramsFn(this.searchParams(), allData) : this.searchParams()
        const data = await this.context.getRecords(this.source, params)
        this.context.setState(data)
    }

    save = async () => {
        var tableData = this.context.getState();
        await Promise.all(tableData.map((record, i) => (
            this.context.saveRecord(this.source, record).then((newRecord) => { tableData[i] = newRecord; })
        )));
        return tableData;
    }
}
