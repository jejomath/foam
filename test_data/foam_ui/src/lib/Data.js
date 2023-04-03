
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

export class TableData {

    constructor(name, source, searchParams, context) {
        this.name = name;
        this.source = source;
        this.context = context;
        this.params = searchParams;
    }

    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ///  Need to add in parameter manipulation!!!!!!!!!!!!!!!!  //
    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    internalParams() {
        return []
    }

    searchParams() {
        return this.params;
    }

    getSearchDict(param) {
        const key = (param.filter === '') ? param.field : `${param.field}__${param.filter}`;
        const value = param.value.id ? param.value.id : param.value;
        return {[key]: value}
    }

    load = (params) => {
        // const params = Object.assign({}, this.props.params,
        //     Object.assign({}, ...this.state.searchParams.map((s) => (this.getSearchDict(s)))))
        this.context.getRecords(
            this.source,
            params).then((data) => {
                this.context.setState(data)
            })
    }
}
