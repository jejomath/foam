import {
    Button,
    EditField
} from './Components.js'

export const schema = {
    assay: {
        name: 'assay',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            type: {
                name: 'type',
                display: 'Type',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'assay_type',
            },
        },
    },
    experiment: {
        name: 'experiment',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            description: {
                name: 'description',
                display: 'Description',
                fieldType: 'TEXT',
                refTable: '',
                enumClass: '',
            },
            start_date: {
                name: 'start_date',
                display: 'Start Date',
                fieldType: 'DATE',
                refTable: '',
                enumClass: '',
            },
            assay: {
                name: 'assay',
                display: 'Assay',
                fieldType: 'ref',
                refTable: 'assay',
                enumClass: '',
            },
            plate_map_file: {
                name: 'plate_map_file',
                display: 'Plate Map File',
                fieldType: 'doc',
                refTable: '',
                enumClass: '',
            },
            type: {
                name: 'type',
                display: 'Type',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'assay_type',
            },
        },
    },
}

export const enums = {
    assay_type: {
        name: 'assay_type',
        options: [{
            name: 'VITRO',
            display: 'in-vitro',
            descr: 'Assays involving cells in plates',
        }, {
            name: 'VIVO',
            display: 'in-vivo',
            descr: 'Assays involving animals',
        }, {
            name: 'CILICO',
            display: 'in-cilico',
            descr: 'Fake experiments done with code',
        }, ],
    },
}

export const pages = {
    view_experiment: {
        name: 'view_experiment',
        display: 'View Experiment',
        config: {
            sourceTable: 'experiment',
            newRecord: '',
            newRecordFn: '',
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_experiment',
                paramsFn: '',
            }, ],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_experiment',
                mode: '',
                paramsFn: '',
            }, ],
        },
    },
    edit_experiment: {
        name: 'edit_experiment',
        display: 'Edit Experiment',
        config: {
            sourceTable: 'experiment',
            newRecord: '',
            newRecordFn: '',
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
            }, {
                field: 'description',
                display: '',
                target: '',
            }, {
                field: 'start_date',
                display: '',
                target: '',
            }, {
                field: 'type',
                display: '',
                target: '',
            }, ],
            editFields: [{
                field: 'name',
                display: 'Experiment Name',
                lookup: 'foo',
            }, {
                field: 'description',
                display: '',
                lookup: '',
            }, {
                field: 'start_date',
                display: '',
                lookup: '',
            }, {
                field: 'type',
                display: '',
                lookup: '',
            }, ],
            referenceTables: [],
            buttons: [{
                display: 'Save',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, {
                display: 'Cancel',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
    },
    find_experiment: {
        name: 'find_experiment',
        display: 'Find Experiment',
        config: {
            sourceTable: 'experiment',
            newRecord: '',
            newRecordFn: '',
            rowAction: {
                display: {
                    display: 'Select Experiment',
                    target: 'view_experiment',
                    params_fn: (data) => ({
                        id: data.id
                    }),
                },
                pretargetFn: '',
                pretarget: '',
                target: '',
                mode: '',
                paramsFn: '',
            },
            viewColumns: [{
                field: 'name',
                width: '100',
            }, {
                field: 'description',
                width: '200',
            }, {
                field: 'start_date',
                width: '50',
            }, {
                field: 'type',
                width: '150',
            }, ],
            editColumns: [],
            searchFields: ['name', 'description', 'start_date', 'type', ],
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
    },
}