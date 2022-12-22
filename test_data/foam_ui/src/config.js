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
    home: {
        name: 'home',
        display: 'Home',
        config: {
            boxes: [{
                name: 'assays',
                links: [{
                    target: 'find_assay',
                    display: 'Find Assays',
                }, {
                    target: 'new_assay',
                    display: 'New Assay',
                }, ],
            }, {
                name: 'experiments',
                links: [{
                    target: 'find_experiment',
                    display: 'Find Experiments',
                }, {
                    target: 'edit_experiment',
                    display: 'New Experiment',
                    mode: 'modal',
                }, ],
            }, ],
        },
        type: LinksPage,
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
                field: 'type',
                display: '',
                target: '',
            }, {
                field: 'assay',
                display: '',
                target: '',
            }, ],
            editFields: [],
            referenceTables: [],
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
            }, {
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_experiment',
                mode: '',
                paramsFn: (params) => ({
                    id: params.id
                }),
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
            }, {
                field: 'assay',
                display: '',
                target: '',
            }, ],
            editFields: [{
                field: 'name',
                display: 'Experiment Name',
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
                field: 'type',
                display: '',
                lookup: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_assay',
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
        type: TablePage,
    },
    find_assay: {
        name: 'find_assay',
        display: 'Find Assay',
        config: {
            sourceTable: 'assay',
            newRecord: '',
            newRecordFn: '',
            rowAction: {
                display: 'Select Experiment',
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
                width: '100',
            }, {
                field: 'type',
                width: '150',
            }, ],
            editColumns: [],
            searchFields: ['name', 'type', ],
            buttons: [{
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
                display: 'Experiments',
                paramsFn: (data) => ({
                    assay: data.id
                }),
            }, ],
            buttons: [{
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
}