import RecordPage from './RecordPage.js';
import TablePage from './TablePage.js';
import LinksPage from './LinksPage.js';

export const schema = {
    cell_line: {
        name: 'cell_line',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
        },
    },
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
            cell_line: {
                name: 'cell_line',
                display: 'Cell Line',
                fieldType: 'ref',
                refTable: 'cell_line',
                enumClass: '',
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
                name: 'Programs',
                links: [{
                    display: 'Program Status Dashboard',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Assays',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_assay',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Experiments',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_experiment',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Experiments',
                links: [{
                    display: 'Update Experiment Status',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_experiment',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Experiment',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'edit_experiment',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Assay',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'edit_assay',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Analysis',
                links: [{
                    display: 'Review Analysis Results',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review CRCs',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Assay',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'edit_assay',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Compounds',
                links: [{
                    display: 'Search Compounds',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Compounds Status',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Inventory',
                links: [{
                    display: 'Manage Cell Lines',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_cell_line',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Platemaps',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Project Management',
                links: [{
                    display: 'Update Program',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Program',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
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
                paramsFn: (params, data) => ({
                    id: data.id
                }),
                visibleFn: '',
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
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
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
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                target: '',
                visibleFn: (params, data) => (data.type === 'VITRO'),
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    assay__id: data.id
                }),
            }, ],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_assay',
                mode: '',
                paramsFn: (params, data) => ({
                    id: params.id
                }),
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
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
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                lookup: '',
                visibleFn: (params, data) => (data.type === 'VITRO'),
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
                visibleFn: '',
            }, {
                display: 'Cancel',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
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
                paramsFn: (params, data) => ({
                    id: data.id
                }),
                visibleFn: '',
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
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
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
                visibleFn: '',
            }, {
                field: 'description',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'plate_map_file',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_experiment',
                mode: '',
                paramsFn: (params, data) => ({
                    id: params.id
                }),
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, {
                display: 'View Animal',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: (params, data) => (data.type === 'VIVO'),
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
                visibleFn: '',
            }, {
                field: 'description',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_assay',
                visibleFn: '',
            }, {
                field: 'plate_map_file',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                lookup: '',
                visibleFn: '',
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
                visibleFn: '',
            }, {
                display: 'Cancel',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
        },
        type: RecordPage,
    },
    find_cell_line: {
        name: 'find_cell_line',
        display: 'Find Cell Line',
        config: {
            sourceTable: 'cell_line',
            newRecord: '',
            newRecordFn: '',
            rowAction: {
                display: 'Select Cell Line',
                pretargetFn: '',
                pretarget: '',
                target: 'view_cell_line',
                mode: '',
                paramsFn: (params, data) => ({
                    id: data.id
                }),
                visibleFn: '',
            },
            viewColumns: [{
                field: 'name',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', ],
            buttons: [{
                display: 'New Cell Line',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_cell_line',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
        },
        type: TablePage,
    },
    view_cell_line: {
        name: 'view_cell_line',
        display: 'View Cell Line',
        config: {
            sourceTable: 'cell_line',
            newRecord: '',
            newRecordFn: '',
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_assay',
                display: 'Assay',
                paramsFn: (params, data) => ({
                    cell_line: data.id
                }),
            }, ],
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_cell_line',
                mode: '',
                paramsFn: (params, data) => ({
                    id: params.id
                }),
                visibleFn: '',
            }, {
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
        },
        type: RecordPage,
    },
    edit_cell_line: {
        name: 'edit_cell_line',
        display: 'Edit Cell Line',
        config: {
            sourceTable: 'cell_line',
            newRecord: '',
            newRecordFn: '',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
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
                visibleFn: '',
            }, {
                display: 'Cancel',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
        },
        type: RecordPage,
    },
}