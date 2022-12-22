import RecordPage from './RecordPage.js';
import TablePage from './TablePage.js';
import LinksPage from './LinksPage.js';

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
    '/': {
        name: 'home',
        display: 'Home',
        config: {
            boxes: [{
                name: 'Experiments',
                links: [{
                    display: 'Assay',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_assay',
                    mode: '',
                    paramsFn: '',
                }, {
                    display: 'Experiment',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_experiment',
                    mode: '',
                    paramsFn: '',
                }, ],
            }, ],
        },
        type: LinksPage,
    },
    find_assay: {
        name: 'find_assay',
        display: 'Find Assay',
        config: {
            sourceTable: 'assay',
            newRecord: '',
            newRecordFn: '',
            rowAction: {
                display: 'Select Assay',
                pretargetFn: '',
                pretarget: '',
                target: 'view_assay',
                mode: '',
                paramsFn: (data) => ({
                    id: data.id
                }),
            },
            viewColumns: [{
                field: 'name',
                width: '200',
            }, {
                field: 'type',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'type', ],
            buttons: [{
                display: 'New Assay',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_assay',
                mode: '',
                paramsFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
        type: TablePage,
    },
    view_assay: {
        name: 'view_assay',
        display: 'View Assay',
        config: {
            sourceTable: 'assay',
            newRecord: '',
            newRecordFn: '',
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
            }, {
                field: 'type',
                display: '',
                target: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_experiment',
                display: 'Experiment',
                paramsFn: (data) => ({
                    assay: data.id
                }),
            }, ],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_assay',
                mode: '',
                paramsFn: (params) => ({
                    id: params.id
                }),
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
        type: RecordPage,
    },
    edit_assay: {
        name: 'edit_assay',
        display: 'Edit Assay',
        config: {
            sourceTable: 'assay',
            newRecord: '',
            newRecordFn: '',
            viewFields: [],
            editFields: [{
                field: 'name',
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
                pretargetFn: (params, data, context) => {
                    context.save()
                },
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
        type: RecordPage,
    },
    find_experiment: {
        name: 'find_experiment',
        display: 'Find Experiment',
        config: {
            sourceTable: 'experiment',
            newRecord: '',
            newRecordFn: '',
            rowAction: {
                display: 'Select Experiment',
                pretargetFn: '',
                pretarget: '',
                target: 'view_experiment',
                mode: '',
                paramsFn: (data) => ({
                    id: data.id
                }),
            },
            viewColumns: [{
                field: 'name',
                width: '200',
            }, {
                field: 'description',
                width: '200',
            }, {
                field: 'start_date',
                width: '200',
            }, {
                field: 'assay',
                width: '200',
            }, {
                field: 'plate_map_file',
                width: '200',
            }, {
                field: 'type',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'description', 'start_date', 'assay', 'plate_map_file', 'type', ],
            buttons: [{
                display: 'New Experiment',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_experiment',
                mode: '',
                paramsFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
        type: TablePage,
    },
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
            }, {
                field: 'description',
                display: '',
                target: '',
            }, {
                field: 'start_date',
                display: '',
                target: '',
            }, {
                field: 'assay',
                display: '',
                target: '',
            }, {
                field: 'plate_map_file',
                display: '',
                target: '',
            }, {
                field: 'type',
                display: '',
                target: '',
            }, ],
            editFields: [],
            referenceTables: [],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_experiment',
                mode: '',
                paramsFn: (params) => ({
                    id: params.id
                }),
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, ],
        },
        type: RecordPage,
    },
    edit_experiment: {
        name: 'edit_experiment',
        display: 'Edit Experiment',
        config: {
            sourceTable: 'experiment',
            newRecord: '',
            newRecordFn: '',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
            }, {
                field: 'description',
                display: '',
                lookup: '',
            }, {
                field: 'start_date',
                display: '',
                lookup: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_assay',
            }, {
                field: 'plate_map_file',
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
                pretargetFn: (params, data, context) => {
                    context.save()
                },
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
        type: RecordPage,
    },
}