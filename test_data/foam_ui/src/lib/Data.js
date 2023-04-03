//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///  Send whole config instead of just source!!!!!!!!!!!!!  //
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

export class RecordData {

    constructor(name, source, searchParams, context) {
        this.name = name;
        this.source = source;
        this.context = context;
        this.params = searchParams;
    }

    internalParams() {
        return this.params;
    }

    searchParams() {
        return this.params;
    }

    cleanParam(field, value) {
        return {id: value, name: value}
    }

    load = () => {
        var createRecord = null;
        if (Object.keys(this.params).length > 0) {  // this.props.config.newEntry !== 'Always' && 
            createRecord = this.context.getRecord(
                this.source,
                this.params);
        } else { createRecord = Promise.resolve(null) }

        createRecord.then((record) => {
            var newRecord = null
            if (!record) {
                const fields = this.context.schema[this.source].fields;
                newRecord = Object.assign({}, ...Object.keys(fields).map((f) => (
                    {[f]: this.params[f] ? this.params[f] : null}
                ))) 
            } else { 
                newRecord = record; 
            }
            this.context.setState(newRecord)
        })
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

    constructor(name, source, searchParams, context) {
        this.name = name;
        this.source = source;
        this.context = context;
        this.schema = this.context.schema[this.source];
        this.params = this.parseParams(searchParams);
    }

    parseParams(params) {
        var internal = []
        Object.keys(params).forEach((k) => {
            const s = k.split('__');
            if (this.schema[s[0]]) {
                internal.push({...this.newParam(s[0]), filter: s[1] ? s[1] : '', value: params[k]})
            }
        })
        return internal
    }

    internalParams() {
        return this.params;
    }

    searchParams() {
        return Object.assign({}, this.params,
            Object.assign({}, ...this.params.map((s) => (this.getSearchDict(s)))))
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
        this.params.push(this.newParam(Object.keys(this.schema.fields)[0]))
        this.context.setParams(this.searchParams)
    }

    changeParamField = (index, value) => {
        this.params[index] = this.newParam(value)
        this.context.setParams(this.searchParams)
    }

    changeParamFilter = (index, value) => {
        var param = this.params[index]
        param.filter = value
        this.context.setParams(this.searchParams)
    }

    changeParamValue = (index, value) => {
        var param = this.params[index]
        param.value = value
        this.context.setParams(this.searchParams)
    }

    load = () => {
        this.context.getRecords(
            this.source,
            this.searchParams()).then((data) => {
                this.context.setState(data)
            }
        )
    }
}
