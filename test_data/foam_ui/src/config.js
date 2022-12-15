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
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            type: {
                name: 'type',
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
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            description: {
                name: 'description',
                fieldType: 'TEXT',
                refTable: '',
                enumClass: '',
            },
            start_date: {
                name: 'start_date',
                fieldType: 'DATE',
                refTable: '',
                enumClass: '',
            },
            assay: {
                name: 'assay',
                fieldType: 'ref',
                refTable: 'assay',
                enumClass: '',
            },
            plate_map_file: {
                name: 'plate_map_file',
                fieldType: 'doc',
                refTable: '',
                enumClass: '',
            },
            type: {
                name: 'type',
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
                display: '',
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
        config: null,
    },
}