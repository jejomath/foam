import {
    RecordData,
    TableData,
    Form,
    Table,
    Grid,
    Links,
    Figure,
    Layout,
    UnderConstruction
} from './lib/index.js';

export const schema = {
    person: {
        name: 'person',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            given_name: {
                name: 'given_name',
                display: 'Given Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            family_name: {
                name: 'family_name',
                display: 'Family Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
        },
    },
    program: {
        name: 'program',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            target: {
                name: 'target',
                display: 'Target',
                fieldType: 'ref',
                refTable: 'protein',
                enumClass: '',
            },
            indication: {
                name: 'indication',
                display: 'Indication',
                fieldType: 'ref',
                refTable: 'indication',
                enumClass: '',
            },
            status: {
                name: 'status',
                display: 'Status',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'program_status',
            },
            started_date: {
                name: 'started_date',
                display: 'Started Date',
                fieldType: 'DATE',
                refTable: '',
                enumClass: '',
            },
            stage: {
                name: 'stage',
                display: 'Stage',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'program_stage',
            },
            bio_lead: {
                name: 'bio_lead',
                display: 'Bio Lead',
                fieldType: 'ref',
                refTable: 'person',
                enumClass: '',
            },
            chem_lead: {
                name: 'chem_lead',
                display: 'Chem Lead',
                fieldType: 'ref',
                refTable: 'person',
                enumClass: '',
            },
            program_manager: {
                name: 'program_manager',
                display: 'Program Manager',
                fieldType: 'ref',
                refTable: 'person',
                enumClass: '',
            },
        },
    },
    program_milestone: {
        name: 'program_milestone',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            program: {
                name: 'program',
                display: 'Program',
                fieldType: 'ref',
                refTable: 'program',
                enumClass: '',
            },
            status: {
                name: 'status',
                display: 'Status',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'activity_status',
            },
            target_date: {
                name: 'target_date',
                display: 'Target Date',
                fieldType: 'DATE',
                refTable: '',
                enumClass: '',
            },
            completed_date: {
                name: 'completed_date',
                display: 'Completed Date',
                fieldType: 'DATE',
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
            descr: {
                name: 'descr',
                display: 'Descr',
                fieldType: 'TEXT',
                refTable: '',
                enumClass: '',
            },
            cell_line: {
                name: 'cell_line',
                display: 'Cell Line',
                fieldType: 'ref',
                refTable: 'cell_line',
                enumClass: '',
            },
            for_program: {
                name: 'for_program',
                display: 'For Program',
                fieldType: 'ref',
                refTable: 'program',
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
            status: {
                name: 'status',
                display: 'Status',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'activity_status',
            },
            program: {
                name: 'program',
                display: 'Program',
                fieldType: 'ref',
                refTable: 'program',
                enumClass: '',
            },
            bio_lead: {
                name: 'bio_lead',
                display: 'Bio Lead',
                fieldType: 'ref',
                refTable: 'person',
                enumClass: '',
            },
            target_start_date: {
                name: 'target_start_date',
                display: 'Target Start Date',
                fieldType: 'DATE',
                refTable: '',
                enumClass: '',
            },
            target_duration: {
                name: 'target_duration',
                display: 'Target Duration',
                fieldType: 'INTEGER',
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
            end_date: {
                name: 'end_date',
                display: 'End Date',
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
            type: {
                name: 'type',
                display: 'Type',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'assay_type',
            },
            perturbations: {
                name: 'perturbations',
                display: 'Perturbations',
                fieldType: 'ref',
                refTable: 'perturbation',
                enumClass: '',
            },
        },
    },
    perturbation: {
        name: 'perturbation',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            compound: {
                name: 'compound',
                display: 'Compound',
                fieldType: 'ref',
                refTable: 'compound',
                enumClass: '',
            },
            concentration_nm: {
                name: 'concentration_nm',
                display: 'Concentration Nm',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
        },
    },
    plate: {
        name: 'plate',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            experiment: {
                name: 'experiment',
                display: 'Experiment',
                fieldType: 'ref',
                refTable: 'experiment',
                enumClass: '',
            },
            row_count: {
                name: 'row_count',
                display: 'Row Count',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
            column_count: {
                name: 'column_count',
                display: 'Column Count',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
        },
    },
    plate_well: {
        name: 'plate_well',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            plate: {
                name: 'plate',
                display: 'Plate',
                fieldType: 'ref',
                refTable: 'plate',
                enumClass: '',
            },
            row: {
                name: 'row',
                display: 'Row',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
            column: {
                name: 'column',
                display: 'Column',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
            purpose: {
                name: 'purpose',
                display: 'Purpose',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'well_purpose',
            },
            perturbation: {
                name: 'perturbation',
                display: 'Perturbation',
                fieldType: 'ref',
                refTable: 'perturbation',
                enumClass: '',
            },
        },
    },
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
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
            organ: {
                name: 'organ',
                display: 'Organ',
                fieldType: 'ref',
                refTable: 'organ',
                enumClass: '',
            },
            tissue: {
                name: 'tissue',
                display: 'Tissue',
                fieldType: 'ref',
                refTable: 'tissue',
                enumClass: '',
            },
            cell_type: {
                name: 'cell_type',
                display: 'Cell Type',
                fieldType: 'ref',
                refTable: 'cell_type',
                enumClass: '',
            },
            donor_sex: {
                name: 'donor_sex',
                display: 'Donor Sex',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'sex',
            },
            donor_age: {
                name: 'donor_age',
                display: 'Donor Age',
                fieldType: 'INTEGER',
                refTable: '',
                enumClass: '',
            },
            donor_ethnicity: {
                name: 'donor_ethnicity',
                display: 'Donor Ethnicity',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'ethnicity',
            },
            donor_health_status: {
                name: 'donor_health_status',
                display: 'Donor Health Status',
                fieldType: 'enum',
                refTable: '',
                enumClass: 'health_status',
            },
            disease: {
                name: 'disease',
                display: 'Disease',
                fieldType: 'ref',
                refTable: 'indication',
                enumClass: '',
            },
        },
    },
    indication: {
        name: 'indication',
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
    species: {
        name: 'species',
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
    organ: {
        name: 'organ',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
        },
    },
    tissue: {
        name: 'tissue',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
        },
    },
    cell_type: {
        name: 'cell_type',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
        },
    },
    protein: {
        name: 'protein',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            gene: {
                name: 'gene',
                display: 'Gene',
                fieldType: 'ref',
                refTable: 'gene',
                enumClass: '',
            },
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
        },
    },
    gene: {
        name: 'gene',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            species: {
                name: 'species',
                display: 'Species',
                fieldType: 'ref',
                refTable: 'species',
                enumClass: '',
            },
        },
    },
    compound: {
        name: 'compound',
        fields: {
            name: {
                name: 'name',
                display: 'Name',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
            smiles: {
                name: 'smiles',
                display: 'Smiles',
                fieldType: 'STRING',
                refTable: '',
                enumClass: '',
            },
        },
    },
}

export const enums = {
    program_status: {
        name: 'program_status',
        options: [{
            name: 'PROPOSED',
            display: 'Proposed',
            descr: 'Program has been proposed but not yet started',
        }, {
            name: 'ACTIVE',
            display: 'Active',
            descr: 'Program is actively being pursued',
        }, {
            name: 'ON_HOLD',
            display: 'On Hold',
            descr: 'Program is temporarily on hold',
        }, {
            name: 'COMPLETE',
            display: 'Completed',
            descr: 'Program has been completed, canceled or otherwise terminated',
        }, ],
    },
    program_stage: {
        name: 'program_stage',
        options: [{
            name: 'DISCOVERY',
            display: 'Discovery',
            descr: 'Early discovery to understand target disease and context',
        }, {
            name: 'TARGET_ID',
            display: 'Target Identification',
            descr: 'Experiments to determine the progra`s primary target',
        }, {
            name: 'ASSAY_DEV',
            display: 'Assay Development',
            descr: 'Development of the program`s primary assay',
        }, {
            name: 'SCREENING',
            display: 'Screening',
            descr: 'High-throughput screening of the primary assay',
        }, {
            name: 'HIT_TO_LEAD',
            display: 'Hit to Lead',
            descr: 'Running secondary assays on hits from screening to determine lead compounds',
        }, {
            name: 'LEAD_OP',
            display: 'Lead Optimization',
            descr: 'MedChem optimization of leads',
        }, {
            name: 'PRECLINICAL',
            display: 'Pre-clinical',
            descr: 'Development of optimized lead into clinical candidate',
        }, {
            name: 'CLINICAL1',
            display: 'Clinical Phase 1',
            descr: 'In phase 1 clinical trials',
        }, {
            name: 'CLINICAL2',
            display: 'Clinical Phase 2',
            descr: 'In phase 2 clinical trials',
        }, {
            name: 'CLINICAL3',
            display: 'Clinical Phase 3',
            descr: 'In phase 3 clinical trials',
        }, ],
    },
    activity_status: {
        name: 'activity_status',
        options: [{
            name: 'TODO',
            display: 'To Do',
            descr: 'Activity hasn`t started yet',
        }, {
            name: 'ON_TRACK',
            display: 'On track',
            descr: 'Activity is proceeding as planned',
        }, {
            name: 'AT_RISK',
            display: 'At risk',
            descr: 'Activity is on track but faces serious risks',
        }, {
            name: 'DELAYED',
            display: 'Delayed',
            descr: 'Activity is behind schedule',
        }, {
            name: 'COMPLETE',
            display: 'Completed',
            descr: 'Activity has been completed',
        }, {
            name: 'CANCELED',
            display: 'Canceled',
            descr: 'Activity has been canceled',
        }, ],
    },
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
    well_purpose: {
        name: 'well_purpose',
        options: [{
            name: 'POS_CTRL',
            display: 'Positive Control',
            descr: 'Positive Control',
        }, {
            name: 'NEG_CTRL',
            display: 'Negative Control',
            descr: 'Netagive Control',
        }, {
            name: 'PERT',
            display: 'Perturbation',
            descr: 'A perturbation',
        }, ],
    },
    ethnicity: {
        name: 'ethnicity',
        options: [],
    },
    health_status: {
        name: 'health_status',
        options: [],
    },
    sex: {
        name: 'sex',
        options: [{
            name: 'MALE',
            display: 'Male',
            descr: '',
        }, {
            name: 'FEMALE',
            display: 'Female',
            descr: '',
        }, {
            name: 'OTHER',
            display: 'Other',
            descr: '',
        }, ],
    },
}

export const pages = {
    '/': {
        name: 'home',
        display: 'Home',
        config: {
            boxes: [{
                name: 'Dashboards',
                links: [{
                    display: 'Program Dashboard',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'program_dashboard',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'HTS Dashboard',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'not_yet',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Analysis Status',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'not_yet',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Experiments',
                links: [{
                    display: 'Review Experiments',
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
                    target: 'new_experiment',
                    mode: 'modal',
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
                    display: 'Create New Assay',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'new_assay',
                    mode: 'modal',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Plates',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_plate',
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
                    target: 'not_yet',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review CRCs',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'not_yet',
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
                    target: 'not_yet',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Compounds Status',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'not_yet',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Perturbations',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_perturbation',
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
                    display: 'Admin Pages',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'admin_home',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Org Chart',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_person',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Programs',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_program',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Biology Reference',
                links: [{
                    display: 'Disease Indications',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_indication',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Species',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_species',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Organs',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_organ',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Tissue Types',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_tissue',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Cell Types',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_cell_type',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Proteins',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_protein',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Genes',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_gene',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Compounds',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_compound',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Account',
                links: [{
                    display: 'Log Out',
                    pretargetFn: (params, data, context) => (context.logOut()),
                    pretarget: '',
                    target: '',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, ],
        },
        data: [],
        type: Links,
        buttons: [],
    },
    not_yet: {
        name: 'not_yet',
        display: 'Not Yet',
        config: {},
        data: [],
        type: UnderConstruction,
        buttons: [],
    },
    find_person: {
        name: 'find_person',
        display: 'Find Person',
        config: {
            source: 'person',
            dataKey: 'table',
            buttons: [{
                display: 'New Person',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_person',
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
            rowAction: {
                display: 'Select Person',
                pretargetFn: '',
                pretarget: '',
                target: 'view_person',
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
                field: 'given_name',
                width: '200',
            }, {
                field: 'family_name',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'given_name', 'family_name', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'person',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_person: {
        name: 'view_person',
        display: 'View Person',
        config: {
            source: 'person',
            dataKey: 'record',
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_person',
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
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'given_name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'family_name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_program',
                display: 'Bio Lead',
                paramsFn: (params, data) => ({
                    bio_lead__id: data.record.id
                }),
            }, {
                tablePage: 'find_program',
                display: 'Chem Lead',
                paramsFn: (params, data) => ({
                    chem_lead__id: data.record.id
                }),
            }, {
                tablePage: 'find_program',
                display: 'Program Manager',
                paramsFn: (params, data) => ({
                    program_manager__id: data.record.id
                }),
            }, {
                tablePage: 'find_experiment',
                display: 'Experiments',
                paramsFn: (params, data) => ({
                    bio_lead__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'person',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                chem_lead__id: data.record.id
            }),
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program_manager__id: data.record.id
            }),
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    edit_person: {
        name: 'edit_person',
        display: 'Edit Person',
        config: {
            source: 'person',
            dataKey: 'record',
            buttons: [{
                display: 'Save',
                pretargetFn: (params, data, context) => (context.save()),
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
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'given_name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'family_name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'person',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [],
    },
    find_program: {
        name: 'find_program',
        display: 'Find Program',
        config: {
            source: 'program',
            dataKey: 'table',
            buttons: [{
                display: 'New Program',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_program',
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
            rowAction: {
                display: 'Select Program',
                pretargetFn: '',
                pretarget: '',
                target: 'view_program',
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
                field: 'target',
                width: '200',
            }, {
                field: 'indication',
                width: '200',
            }, {
                field: 'status',
                width: '200',
            }, {
                field: 'started_date',
                width: '200',
            }, {
                field: 'stage',
                width: '200',
            }, {
                field: 'bio_lead',
                width: '200',
            }, {
                field: 'chem_lead',
                width: '200',
            }, {
                field: 'program_manager',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'target', 'indication', 'status', 'started_date', 'stage', 'bio_lead', 'chem_lead', 'program_manager', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_program: {
        name: 'view_program',
        display: 'View Program',
        config: {
            source: 'program',
            dataKey: 'record',
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_program',
                mode: '',
                paramsFn: (params, data) => ({
                    id: params.id
                }),
                visibleFn: '',
            }, {
                display: 'Edit Milestones',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_program_milestone_table',
                mode: 'modal',
                paramsFn: (params, data) => ({
                    program__id: data.id,
                    _program: data.record
                }),
                visibleFn: '',
            }, {
                display: 'Create Milestones',
                pretargetFn: '',
                pretarget: '',
                target: 'new_program_milestone_table',
                mode: 'modal',
                paramsFn: (params, data) => ({
                    program__id: data.id,
                    _program: data.record
                }),
                visibleFn: (params, data) => (data.find_program_milestone.length === 0),
            }, {
                display: 'New Experiment',
                pretargetFn: '',
                pretarget: '',
                target: 'new_experiment',
                mode: 'modal',
                paramsFn: (params, data) => ({
                    program: data.record
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
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'indication',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'started_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'stage',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_program_milestone',
                display: 'Milestones',
                paramsFn: (params, data) => ({
                    program__id: data.record.id
                }),
            }, {
                tablePage: 'find_assay',
                display: 'Assays',
                paramsFn: (params, data) => ({
                    for_program__id: data.record.id
                }),
            }, {
                tablePage: 'find_experiment',
                display: 'Experiments',
                paramsFn: (params, data) => ({
                    program__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, {
            name: 'find_assay',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                for_program__id: data.record.id
            }),
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    edit_program: {
        name: 'edit_program',
        display: 'Edit Program',
        config: {
            source: 'program',
            dataKey: 'record',
            buttons: [{
                display: 'Save',
                pretargetFn: (params, data, context) => (context.save()),
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
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target',
                display: '',
                lookup: 'find_protein',
                visibleFn: '',
            }, {
                field: 'indication',
                display: '',
                lookup: 'find_indication',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'started_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'stage',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                lookup: 'find_person',
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: '',
                lookup: 'find_person',
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: '',
                lookup: 'find_person',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [],
    },
    find_program_milestone: {
        name: 'find_program_milestone',
        display: 'Find Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'table',
            buttons: [{
                display: 'New Program Milestone',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_program_milestone',
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
            rowAction: {
                display: 'Select Program Milestone',
                pretargetFn: '',
                pretarget: '',
                target: 'view_program_milestone',
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
                field: 'status',
                width: '200',
            }, {
                field: 'target_date',
                width: '200',
            }, {
                field: 'completed_date',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'program', 'status', 'target_date', 'completed_date', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    edit_program_milestone_table: {
        name: 'edit_program_milestone_table',
        display: 'Edit Program Milestone Table',
        config: {
            source: 'program_milestone',
            dataKey: 'table',
            buttons: [{
                display: 'New Milestone',
                pretargetFn: (params, data, context) => (context.addNew({
                    program: params._program
                })),
                pretarget: '',
                target: '',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, {
                display: 'Save & Close',
                pretargetFn: (params, data, context) => (context.save()),
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
            rowAction: null,
            viewColumns: [],
            editColumns: [{
                field: 'program',
                width: '200',
            }, {
                field: 'name',
                width: '200',
            }, {
                field: 'status',
                width: '200',
            }, {
                field: 'target_date',
                width: '200',
            }, {
                field: 'completed_date',
                width: '200',
            }, ],
            searchFields: null,
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    new_program_milestone_table: {
        name: 'new_program_milestone_table',
        display: 'New Program Milestone Table',
        config: {
            source: 'program_milestone',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, {
                display: 'New Milestone',
                pretargetFn: (params, data, context) => (context.addNew({
                    program: params._program
                })),
                pretarget: '',
                target: '',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, {
                display: 'Save',
                pretargetFn: (params, data, context) => (context.save()),
                pretarget: '',
                target: '',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: null,
            viewColumns: [],
            editColumns: [{
                field: 'program',
                width: '200',
            }, {
                field: 'name',
                width: '200',
            }, {
                field: 'status',
                width: '200',
            }, {
                field: 'target_date',
                width: '200',
            }, {
                field: 'completed_date',
                width: '200',
            }, ],
            searchFields: null,
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: async (params, data, context) => {
                for (let i = 0; i < 3; i++) {
                    context.addNew({
                        program: params._program
                    })
                }
            },
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_program_milestone: {
        name: 'view_program_milestone',
        display: 'View Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'record',
            buttons: [{
                display: 'Edit',
                pretargetFn: '',
                pretarget: '',
                target: 'edit_program_milestone',
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
            viewFields: [{
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program_milestone',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [],
    },
    edit_program_milestone: {
        name: 'edit_program_milestone',
        display: 'Edit Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'record',
            buttons: [{
                display: 'Save',
                pretargetFn: (params, data, context) => (context.save()),
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
            viewFields: [{
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program_milestone',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [],
    },
    program_dashboard: {
        name: 'program_dashboard',
        display: 'Program Dashboard',
        config: {
            source: 'program_stats',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            plots: [{
                config: {
                    type: 'bar',
                    orientation: 'h',
                },
                data: {
                    x: 'experiment',
                    y: 'name',
                },
            }, ],
            layout: {
                title: 'Experiments per Program',
                width: '700',
                height: '400',
            },
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program_stats',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Figure,
        buttons: [],
    },
    find_assay: {
        name: 'find_assay',
        display: 'Find Assay',
        config: {
            source: 'assay',
            dataKey: 'table',
            buttons: [],
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
            }, {
                field: 'descr',
                width: '200',
            }, {
                field: 'cell_line',
                width: '200',
            }, {
                field: 'for_program',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'type', 'descr', 'cell_line', 'for_program', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Assay',
            pretargetFn: '',
            pretarget: '',
            target: 'new_assay',
            mode: 'modal',
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
    view_assay: {
        name: 'view_assay',
        display: 'View Assay',
        config: {
            source: 'assay',
            dataKey: 'record',
            buttons: [],
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
                field: 'descr',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                target: '',
                visibleFn: (params, data) => (data.type === 'VITRO'),
            }, {
                field: 'for_program',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    assay__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'assay',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                assay__id: data.record.id
            }),
        }, ],
        type: Form,
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
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: '',
            target: 'new_experiment',
            mode: 'modal',
            paramsFn: (params, data) => ({
                assay: data.record
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
    new_assay: {
        name: 'new_assay',
        display: 'New Assay',
        config: {
            source: 'assay',
            dataKey: 'record',
            buttons: [],
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
                lookup: 'find_cell_line',
                visibleFn: (params, data) => (data.type === 'VITRO'),
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'assay',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: '',
            target: 'edit_assay',
            mode: '',
            paramsFn: (params, data) => ({
                id: data.id
            }),
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
    edit_assay: {
        name: 'edit_assay',
        display: 'Edit Assay',
        config: {
            source: 'assay',
            dataKey: 'record',
            buttons: [],
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
            }, ],
            editFields: [{
                field: 'descr',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                lookup: 'find_cell_line',
                visibleFn: (params, data) => (data.type === 'VITRO'),
            }, {
                field: 'for_program',
                display: '',
                lookup: 'find_program',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'assay',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_experiment: {
        name: 'find_experiment',
        display: 'Find Experiment',
        config: {
            source: 'experiment',
            dataKey: 'table',
            buttons: [],
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
                field: 'status',
                width: '200',
            }, {
                field: 'program',
                width: '200',
            }, {
                field: 'bio_lead',
                width: '200',
            }, {
                field: 'target_start_date',
                width: '200',
            }, {
                field: 'target_duration',
                width: '200',
            }, {
                field: 'start_date',
                width: '200',
            }, {
                field: 'end_date',
                width: '200',
            }, {
                field: 'assay',
                width: '200',
            }, {
                field: 'type',
                width: '200',
            }, {
                field: 'perturbations',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'description', 'status', 'program', 'bio_lead', 'target_start_date', 'target_duration', 'start_date', 'end_date', 'assay', 'type', 'perturbations', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: '',
            target: 'new_experiment',
            mode: 'modal',
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
    view_experiment: {
        name: 'view_experiment',
        display: 'View Experiment',
        config: {
            source: 'experiment',
            dataKey: 'record',
            buttons: [],
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
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'end_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_plate',
                display: 'Plates',
                paramsFn: (params, data) => ({
                    experiment__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'experiment',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_plate',
            type: TableData,
            source: 'plate',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                experiment__id: data.record.id
            }),
        }, ],
        type: Form,
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
            display: 'Add Plate',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_plate',
            mode: 'modal',
            paramsFn: (params, data) => ({
                experiment: data.record
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
    new_experiment: {
        name: 'new_experiment',
        display: 'New Experiment',
        config: {
            source: 'experiment',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'assay',
                display: '',
                lookup: 'find_assay',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'experiment',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: '',
            target: 'edit_experiment',
            mode: '',
            paramsFn: (params, data) => ({
                id: data.id
            }),
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
    edit_experiment: {
        name: 'edit_experiment',
        display: 'Edit Experiment',
        config: {
            source: 'experiment',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [{
                field: 'description',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                lookup: 'find_person',
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'end_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_assay',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: '',
                lookup: 'find_perturbation',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'experiment',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_plate: {
        name: 'find_plate',
        display: 'Find Plate',
        config: {
            source: 'plate',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Plate',
                pretargetFn: '',
                pretarget: '',
                target: 'view_plate',
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
                field: 'experiment',
                width: '200',
            }, {
                field: 'row_count',
                width: '200',
            }, {
                field: 'column_count',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'experiment', 'row_count', 'column_count', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'plate',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_plate',
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
    view_plate: {
        name: 'view_plate',
        display: 'View Plate',
        config: {
            source: 'plate',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'column_count',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_plate_well',
                display: 'Plate Well',
                paramsFn: (params, data) => ({
                    plate__id: data.record.id,
                    rows: data.record.row_count,
                    cols: data.record.column_count
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_plate_well',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: async (params, data, context) => {
                const existing = await context.getRecords('plate_well', {
                    plate__id: params.plate__id
                });
                if (existing.length > 0) {
                    context.setState(existing)
                } else {
                    Array(parseInt(params.rows)).fill().forEach((_, r) => {
                        Array(parseInt(params.cols)).fill().forEach((_, c) => {
                            context.addNew({
                                name: `p${params.plate__id}r${r}c${c}`,
                                plate: params.plate__id,
                                row: r,
                                column: c
                            })
                        })
                    })
                }
            },
            paramsFn: (params, data) => ({
                plate__id: data.record.id,
                rows: data.record.row_count,
                cols: data.record.column_count
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_plate',
            mode: '',
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Edit Wells',
            pretargetFn: '',
            pretarget: '',
            target: 'find_plate_well',
            mode: '',
            paramsFn: (params, data) => ({
                plate__id: data.record.id,
                rows: data.record.row_count,
                cols: data.record.column_count
            }),
            visibleFn: '',
        }, {
            display: 'View Plate Map',
            pretargetFn: '',
            pretarget: '',
            target: 'view_plate_map',
            mode: '',
            paramsFn: (params, data) => ({
                plate__id: data.record.id
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
    edit_plate: {
        name: 'edit_plate',
        display: 'Edit Plate',
        config: {
            source: 'plate',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                lookup: 'find_experiment',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'column_count',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_plate_well: {
        name: 'find_plate_well',
        display: 'Find Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'table',
            buttons: [],
            rowAction: null,
            viewColumns: [],
            editColumns: [{
                field: 'row',
                width: '20',
            }, {
                field: 'column',
                width: '20',
            }, {
                field: 'purpose',
                width: '200',
            }, {
                field: 'perturbation',
                width: '200',
            }, ],
            searchFields: null,
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: async (params, data, context) => {
                const existing = await context.getRecords('plate_well', {
                    plate__id: params.plate__id
                });
                if (existing.length > 0) {
                    context.setState(existing)
                } else {
                    Array(parseInt(params.rows)).fill().forEach((_, r) => {
                        Array(parseInt(params.cols)).fill().forEach((_, c) => {
                            context.addNew({
                                name: `p${params.plate__id}r${r}c${c}`,
                                plate: params.plate__id,
                                row: r,
                                column: c
                            })
                        })
                    })
                }
            },
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: '',
            target: 'back',
            mode: '',
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: '',
            target: 'back',
            mode: '',
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_plate_map: {
        name: 'view_plate_map',
        display: 'View Plate Map',
        config: {
            source: 'plate_well',
            dataKey: 'table',
            buttons: [],
            rowField: 'row',
            columnField: 'column',
            displayField: 'purpose',
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Grid,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: '',
            target: 'back',
            mode: '',
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.table.save()),
            pretarget: '',
            target: 'back',
            mode: '',
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_perturbation: {
        name: 'find_perturbation',
        display: 'Find Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Perturbation',
                pretargetFn: '',
                pretarget: '',
                target: 'view_perturbation',
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
                field: 'compound',
                width: '200',
            }, {
                field: 'concentration_nm',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'compound', 'concentration_nm', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'perturbation',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_perturbation: {
        name: 'view_perturbation',
        display: 'View Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'compound',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    perturbations__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'perturbation',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbations__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_cell_line: {
        name: 'find_cell_line',
        display: 'Find Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'table',
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
            }, {
                field: 'species',
                width: '200',
            }, {
                field: 'organ',
                width: '200',
            }, {
                field: 'tissue',
                width: '200',
            }, {
                field: 'cell_type',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', 'organ', 'tissue', 'cell_type', 'donor_sex', 'donor_age', 'donor_ethnicity', 'donor_health_status', 'disease', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_cell_line: {
        name: 'view_cell_line',
        display: 'View Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'record',
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
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'organ',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'tissue',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'disease',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_assay',
                display: 'Assay',
                paramsFn: (params, data) => ({
                    cell_line__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_line',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_assay',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_line__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    edit_cell_line: {
        name: 'edit_cell_line',
        display: 'Edit Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'record',
            buttons: [{
                display: 'Save',
                pretargetFn: (params, data, context) => (context.save()),
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
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_species',
                visibleFn: '',
            }, {
                field: 'organ',
                display: '',
                lookup: 'find_organ',
                visibleFn: '',
            }, {
                field: 'tissue',
                display: '',
                lookup: 'find_tissue',
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: '',
                lookup: 'find_cell_type',
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'disease',
                display: '',
                lookup: 'find_indication',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_line',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [],
    },
    find_indication: {
        name: 'find_indication',
        display: 'Find Indication',
        config: {
            source: 'indication',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Indication',
                pretargetFn: '',
                pretarget: '',
                target: 'view_indication',
                mode: '',
                paramsFn: (params, data) => ({
                    id: data.id
                }),
                visibleFn: '',
            },
            viewColumns: [{
                field: 'name',
                width: '400',
            }, ],
            editColumns: [],
            searchFields: ['name', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'indication',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_indication: {
        name: 'view_indication',
        display: 'View Indication',
        config: {
            source: 'indication',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    indication__id: data.record.id
                }),
            }, {
                tablePage: 'find_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    disease__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'indication',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                indication__id: data.record.id
            }),
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                disease__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_species: {
        name: 'find_species',
        display: 'Find Species',
        config: {
            source: 'species',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Species',
                pretargetFn: '',
                pretarget: '',
                target: 'view_species',
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
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'species',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_species: {
        name: 'view_species',
        display: 'View Species',
        config: {
            source: 'species',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_organ',
                display: 'Organ',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_tissue',
                display: 'Tissue',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_cell_type',
                display: 'Cell Type',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_protein',
                display: 'Protein',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_gene',
                display: 'Gene',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'species',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_organ',
            type: TableData,
            source: 'organ',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_tissue',
            type: TableData,
            source: 'tissue',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_cell_type',
            type: TableData,
            source: 'cell_type',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_protein',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_gene',
            type: TableData,
            source: 'gene',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_organ: {
        name: 'find_organ',
        display: 'Find Organ',
        config: {
            source: 'organ',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Organ',
                pretargetFn: '',
                pretarget: '',
                target: 'view_organ',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'organ',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_organ: {
        name: 'view_organ',
        display: 'View Organ',
        config: {
            source: 'organ',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    organ__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'organ',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                organ__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_tissue: {
        name: 'find_tissue',
        display: 'Find Tissue',
        config: {
            source: 'tissue',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Tissue',
                pretargetFn: '',
                pretarget: '',
                target: 'view_tissue',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'tissue',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_tissue: {
        name: 'view_tissue',
        display: 'View Tissue',
        config: {
            source: 'tissue',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    tissue__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'tissue',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                tissue__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_cell_type: {
        name: 'find_cell_type',
        display: 'Find Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Cell Type',
                pretargetFn: '',
                pretarget: '',
                target: 'view_cell_type',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'cell_type',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_cell_type: {
        name: 'view_cell_type',
        display: 'View Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    cell_type__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_type',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_type__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_protein: {
        name: 'find_protein',
        display: 'Find Protein',
        config: {
            source: 'protein',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Protein',
                pretargetFn: '',
                pretarget: '',
                target: 'view_protein',
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
                field: 'gene',
                width: '200',
            }, {
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'gene', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_protein: {
        name: 'view_protein',
        display: 'View Protein',
        config: {
            source: 'protein',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'gene',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    target__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'protein',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                target__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_gene: {
        name: 'find_gene',
        display: 'Find Gene',
        config: {
            source: 'gene',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Gene',
                pretargetFn: '',
                pretarget: '',
                target: 'view_gene',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'gene',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_gene: {
        name: 'view_gene',
        display: 'View Gene',
        config: {
            source: 'gene',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_protein',
                display: 'Protein',
                paramsFn: (params, data) => ({
                    gene__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'gene',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_protein',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                gene__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    find_compound: {
        name: 'find_compound',
        display: 'Find Compound',
        config: {
            source: 'compound',
            dataKey: 'table',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            rowAction: {
                display: 'Select Compound',
                pretargetFn: '',
                pretarget: '',
                target: 'view_compound',
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
                field: 'smiles',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'smiles', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'compound',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [],
    },
    view_compound: {
        name: 'view_compound',
        display: 'View Compound',
        config: {
            source: 'compound',
            dataKey: 'record',
            buttons: [{
                display: 'Done',
                pretargetFn: '',
                pretarget: '',
                target: 'back',
                mode: '',
                paramsFn: '',
                visibleFn: '',
            }, ],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'smiles',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_perturbation',
                display: 'Perturbation',
                paramsFn: (params, data) => ({
                    compound__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'compound',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_perturbation',
            type: TableData,
            source: 'perturbation',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                compound__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [],
    },
    admin_home: {
        name: 'admin_home',
        display: 'Admin Home',
        config: {
            boxes: [{
                name: 'Programs',
                links: [{
                    display: 'Person',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_person',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Program',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_program',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Program Milestone',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_program_milestone',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Experiments',
                links: [{
                    display: 'Assay',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_assay',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Experiment',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_experiment',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Perturbation',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_perturbation',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Plate',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_plate',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Plate Well',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_plate_well',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Inventory',
                links: [{
                    display: 'Cell Line',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_cell_line',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Biology Reference',
                links: [{
                    display: 'Indication',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_indication',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Species',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_species',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Organ',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_organ',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Tissue',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_tissue',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Cell Type',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_cell_type',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Protein',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_protein',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Gene',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_gene',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Compound',
                    pretargetFn: '',
                    pretarget: '',
                    target: 'find_admin_compound',
                    mode: '',
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, ],
        },
        data: [],
        type: Links,
        buttons: [],
    },
    find_admin_person: {
        name: 'find_admin_person',
        display: 'Find Admin Person',
        config: {
            source: 'person',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Person',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_person',
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
                field: 'given_name',
                width: '200',
            }, {
                field: 'family_name',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'given_name', 'family_name', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'person',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Person',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_person',
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
    view_admin_person: {
        name: 'view_admin_person',
        display: 'View Admin Person',
        config: {
            source: 'person',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'given_name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'family_name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    bio_lead__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    chem_lead__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    program_manager__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    bio_lead__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'person',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                chem_lead__id: data.record.id
            }),
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program_manager__id: data.record.id
            }),
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_person',
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
    edit_admin_person: {
        name: 'edit_admin_person',
        display: 'Edit Admin Person',
        config: {
            source: 'person',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'given_name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'family_name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'person',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_program: {
        name: 'find_admin_program',
        display: 'Find Admin Program',
        config: {
            source: 'program',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Program',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_program',
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
                field: 'target',
                width: '200',
            }, {
                field: 'indication',
                width: '200',
            }, {
                field: 'status',
                width: '200',
            }, {
                field: 'started_date',
                width: '200',
            }, {
                field: 'stage',
                width: '200',
            }, {
                field: 'bio_lead',
                width: '200',
            }, {
                field: 'chem_lead',
                width: '200',
            }, {
                field: 'program_manager',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'target', 'indication', 'status', 'started_date', 'stage', 'bio_lead', 'chem_lead', 'program_manager', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_program',
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
    view_admin_program: {
        name: 'view_admin_program',
        display: 'View Admin Program',
        config: {
            source: 'program',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'indication',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'started_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'stage',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_program_milestone',
                display: 'Program Milestone',
                paramsFn: (params, data) => ({
                    program__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_assay',
                display: 'Assay',
                paramsFn: (params, data) => ({
                    for_program__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    program__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, {
            name: 'find_admin_assay',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                for_program__id: data.record.id
            }),
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_program',
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
    edit_admin_program: {
        name: 'edit_admin_program',
        display: 'Edit Admin Program',
        config: {
            source: 'program',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target',
                display: '',
                lookup: 'find_admin_protein',
                visibleFn: '',
            }, {
                field: 'indication',
                display: '',
                lookup: 'find_admin_indication',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'started_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'stage',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                lookup: 'find_admin_person',
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: '',
                lookup: 'find_admin_person',
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: '',
                lookup: 'find_admin_person',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_program_milestone: {
        name: 'find_admin_program_milestone',
        display: 'Find Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Program Milestone',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_program_milestone',
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
                field: 'program',
                width: '200',
            }, {
                field: 'status',
                width: '200',
            }, {
                field: 'target_date',
                width: '200',
            }, {
                field: 'completed_date',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'program', 'status', 'target_date', 'completed_date', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'program_milestone',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program Milestone',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_program_milestone',
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
    view_admin_program_milestone: {
        name: 'view_admin_program_milestone',
        display: 'View Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program_milestone',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_program_milestone',
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
    edit_admin_program_milestone: {
        name: 'edit_admin_program_milestone',
        display: 'Edit Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                lookup: 'find_admin_program',
                visibleFn: '',
            }, {
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'program_milestone',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_assay: {
        name: 'find_admin_assay',
        display: 'Find Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Assay',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_assay',
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
            }, {
                field: 'descr',
                width: '200',
            }, {
                field: 'cell_line',
                width: '200',
            }, {
                field: 'for_program',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'type', 'descr', 'cell_line', 'for_program', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Assay',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_assay',
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
    view_admin_assay: {
        name: 'view_admin_assay',
        display: 'View Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'record',
            buttons: [],
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
                field: 'descr',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'for_program',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    assay__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'assay',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                assay__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_assay',
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
    edit_admin_assay: {
        name: 'edit_admin_assay',
        display: 'Edit Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'record',
            buttons: [],
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
                field: 'descr',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                lookup: 'find_admin_cell_line',
                visibleFn: '',
            }, {
                field: 'for_program',
                display: '',
                lookup: 'find_admin_program',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'assay',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_experiment: {
        name: 'find_admin_experiment',
        display: 'Find Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Experiment',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_experiment',
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
                field: 'status',
                width: '200',
            }, {
                field: 'program',
                width: '200',
            }, {
                field: 'bio_lead',
                width: '200',
            }, {
                field: 'target_start_date',
                width: '200',
            }, {
                field: 'target_duration',
                width: '200',
            }, {
                field: 'start_date',
                width: '200',
            }, {
                field: 'end_date',
                width: '200',
            }, {
                field: 'assay',
                width: '200',
            }, {
                field: 'type',
                width: '200',
            }, {
                field: 'perturbations',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'description', 'status', 'program', 'bio_lead', 'target_start_date', 'target_duration', 'start_date', 'end_date', 'assay', 'type', 'perturbations', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_experiment',
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
    view_admin_experiment: {
        name: 'view_admin_experiment',
        display: 'View Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'record',
            buttons: [],
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
                field: 'status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'end_date',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_plate',
                display: 'Plate',
                paramsFn: (params, data) => ({
                    experiment__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'experiment',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_plate',
            type: TableData,
            source: 'plate',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                experiment__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_experiment',
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
    edit_admin_experiment: {
        name: 'edit_admin_experiment',
        display: 'Edit Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'record',
            buttons: [],
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
                field: 'status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                lookup: 'find_admin_program',
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                lookup: 'find_admin_person',
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'start_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'end_date',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_admin_assay',
                visibleFn: '',
            }, {
                field: 'type',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: '',
                lookup: 'find_admin_perturbation',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'experiment',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_perturbation: {
        name: 'find_admin_perturbation',
        display: 'Find Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Perturbation',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_perturbation',
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
                field: 'compound',
                width: '200',
            }, {
                field: 'concentration_nm',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'compound', 'concentration_nm', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'perturbation',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Perturbation',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_perturbation',
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
    view_admin_perturbation: {
        name: 'view_admin_perturbation',
        display: 'View Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'compound',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_experiment',
                display: 'Experiment',
                paramsFn: (params, data) => ({
                    perturbations__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_plate_well',
                display: 'Plate Well',
                paramsFn: (params, data) => ({
                    perturbation__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'perturbation',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbations__id: data.record.id
            }),
        }, {
            name: 'find_admin_plate_well',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbation__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_perturbation',
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
    edit_admin_perturbation: {
        name: 'edit_admin_perturbation',
        display: 'Edit Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'compound',
                display: '',
                lookup: 'find_admin_compound',
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'perturbation',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_plate: {
        name: 'find_admin_plate',
        display: 'Find Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Plate',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_plate',
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
                field: 'experiment',
                width: '200',
            }, {
                field: 'row_count',
                width: '200',
            }, {
                field: 'column_count',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'experiment', 'row_count', 'column_count', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'plate',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_plate',
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
    view_admin_plate: {
        name: 'view_admin_plate',
        display: 'View Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'column_count',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_plate_well',
                display: 'Plate Well',
                paramsFn: (params, data) => ({
                    plate__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_plate_well',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                plate__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_plate',
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
    edit_admin_plate: {
        name: 'edit_admin_plate',
        display: 'Edit Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                lookup: 'find_admin_experiment',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'column_count',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_plate_well: {
        name: 'find_admin_plate_well',
        display: 'Find Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Plate Well',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_plate_well',
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
                field: 'plate',
                width: '200',
            }, {
                field: 'row',
                width: '200',
            }, {
                field: 'column',
                width: '200',
            }, {
                field: 'purpose',
                width: '200',
            }, {
                field: 'perturbation',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'plate', 'row', 'column', 'purpose', 'perturbation', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'plate_well',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate Well',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_plate_well',
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
    view_admin_plate_well: {
        name: 'view_admin_plate_well',
        display: 'View Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'plate',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'row',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'column',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'purpose',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'perturbation',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate_well',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_plate_well',
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
    edit_admin_plate_well: {
        name: 'edit_admin_plate_well',
        display: 'Edit Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'plate',
                display: '',
                lookup: 'find_admin_plate',
                visibleFn: '',
            }, {
                field: 'row',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'column',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'purpose',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'perturbation',
                display: '',
                lookup: 'find_admin_perturbation',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'plate_well',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_cell_line: {
        name: 'find_admin_cell_line',
        display: 'Find Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Cell Line',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_cell_line',
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
                field: 'species',
                width: '200',
            }, {
                field: 'organ',
                width: '200',
            }, {
                field: 'tissue',
                width: '200',
            }, {
                field: 'cell_type',
                width: '200',
            }, {
                field: 'donor_sex',
                width: '200',
            }, {
                field: 'donor_age',
                width: '200',
            }, {
                field: 'donor_ethnicity',
                width: '200',
            }, {
                field: 'donor_health_status',
                width: '200',
            }, {
                field: 'disease',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', 'organ', 'tissue', 'cell_type', 'donor_sex', 'donor_age', 'donor_ethnicity', 'donor_health_status', 'disease', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Cell Line',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_cell_line',
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
    view_admin_cell_line: {
        name: 'view_admin_cell_line',
        display: 'View Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'organ',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'tissue',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'disease',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_assay',
                display: 'Assay',
                paramsFn: (params, data) => ({
                    cell_line__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_line',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_assay',
            type: TableData,
            source: 'assay',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_line__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_cell_line',
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
    edit_admin_cell_line: {
        name: 'edit_admin_cell_line',
        display: 'Edit Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, {
                field: 'organ',
                display: '',
                lookup: 'find_admin_organ',
                visibleFn: '',
            }, {
                field: 'tissue',
                display: '',
                lookup: 'find_admin_tissue',
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: '',
                lookup: 'find_admin_cell_type',
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'disease',
                display: '',
                lookup: 'find_admin_indication',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_line',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_indication: {
        name: 'find_admin_indication',
        display: 'Find Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Indication',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_indication',
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
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'indication',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Indication',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_indication',
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
    view_admin_indication: {
        name: 'view_admin_indication',
        display: 'View Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    indication__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    disease__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'indication',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                indication__id: data.record.id
            }),
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                disease__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_indication',
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
    edit_admin_indication: {
        name: 'edit_admin_indication',
        display: 'Edit Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'indication',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_species: {
        name: 'find_admin_species',
        display: 'Find Admin Species',
        config: {
            source: 'species',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Species',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_species',
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
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'species',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Species',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_species',
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
    view_admin_species: {
        name: 'view_admin_species',
        display: 'View Admin Species',
        config: {
            source: 'species',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_organ',
                display: 'Organ',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_tissue',
                display: 'Tissue',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_cell_type',
                display: 'Cell Type',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_protein',
                display: 'Protein',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, {
                tablePage: 'find_admin_gene',
                display: 'Gene',
                paramsFn: (params, data) => ({
                    species__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'species',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_organ',
            type: TableData,
            source: 'organ',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_tissue',
            type: TableData,
            source: 'tissue',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_cell_type',
            type: TableData,
            source: 'cell_type',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_protein',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_gene',
            type: TableData,
            source: 'gene',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_species',
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
    edit_admin_species: {
        name: 'edit_admin_species',
        display: 'Edit Admin Species',
        config: {
            source: 'species',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'species',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_organ: {
        name: 'find_admin_organ',
        display: 'Find Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Organ',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_organ',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'organ',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Organ',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_organ',
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
    view_admin_organ: {
        name: 'view_admin_organ',
        display: 'View Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    organ__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'organ',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                organ__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_organ',
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
    edit_admin_organ: {
        name: 'edit_admin_organ',
        display: 'Edit Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'organ',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_tissue: {
        name: 'find_admin_tissue',
        display: 'Find Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Tissue',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_tissue',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'tissue',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Tissue',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_tissue',
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
    view_admin_tissue: {
        name: 'view_admin_tissue',
        display: 'View Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    tissue__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'tissue',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                tissue__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_tissue',
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
    edit_admin_tissue: {
        name: 'edit_admin_tissue',
        display: 'Edit Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'tissue',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_cell_type: {
        name: 'find_admin_cell_type',
        display: 'Find Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Cell Type',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_cell_type',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'cell_type',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Cell Type',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_cell_type',
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
    view_admin_cell_type: {
        name: 'view_admin_cell_type',
        display: 'View Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_cell_line',
                display: 'Cell Line',
                paramsFn: (params, data) => ({
                    cell_type__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_type',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_type__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_cell_type',
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
    edit_admin_cell_type: {
        name: 'edit_admin_cell_type',
        display: 'Edit Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'cell_type',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_protein: {
        name: 'find_admin_protein',
        display: 'Find Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Protein',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_protein',
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
                field: 'gene',
                width: '200',
            }, {
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'gene', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Protein',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_protein',
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
    view_admin_protein: {
        name: 'view_admin_protein',
        display: 'View Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'gene',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_program',
                display: 'Program',
                paramsFn: (params, data) => ({
                    target__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'protein',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                target__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_protein',
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
    edit_admin_protein: {
        name: 'edit_admin_protein',
        display: 'Edit Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'gene',
                display: '',
                lookup: 'find_admin_gene',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'protein',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_gene: {
        name: 'find_admin_gene',
        display: 'Find Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Gene',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_gene',
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
                field: 'species',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'species', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'gene',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Gene',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_gene',
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
    view_admin_gene: {
        name: 'view_admin_gene',
        display: 'View Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_protein',
                display: 'Protein',
                paramsFn: (params, data) => ({
                    gene__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'gene',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_protein',
            type: TableData,
            source: 'protein',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                gene__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_gene',
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
    edit_admin_gene: {
        name: 'edit_admin_gene',
        display: 'Edit Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'species',
                display: '',
                lookup: 'find_admin_species',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'gene',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
    find_admin_compound: {
        name: 'find_admin_compound',
        display: 'Find Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'table',
            buttons: [],
            rowAction: {
                display: 'Select Compound',
                pretargetFn: '',
                pretarget: '',
                target: 'view_admin_compound',
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
                field: 'smiles',
                width: '200',
            }, ],
            editColumns: [],
            searchFields: ['name', 'smiles', ],
        },
        data: [{
            name: 'table',
            type: TableData,
            source: 'compound',
            new: '',
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Compound',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_compound',
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
    view_admin_compound: {
        name: 'view_admin_compound',
        display: 'View Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'record',
            buttons: [],
            viewFields: [{
                field: 'name',
                display: '',
                target: '',
                visibleFn: '',
            }, {
                field: 'smiles',
                display: '',
                target: '',
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_admin_perturbation',
                display: 'Perturbation',
                paramsFn: (params, data) => ({
                    compound__id: data.record.id
                }),
            }, ],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'compound',
            new: '',
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_perturbation',
            type: TableData,
            source: 'perturbation',
            new: '',
            onLoadFn: '',
            paramsFn: (params, data) => ({
                compound__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: '',
            target: 'edit_admin_compound',
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
    edit_admin_compound: {
        name: 'edit_admin_compound',
        display: 'Edit Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'record',
            buttons: [],
            viewFields: [],
            editFields: [{
                field: 'name',
                display: '',
                lookup: '',
                visibleFn: '',
            }, {
                field: 'smiles',
                display: '',
                lookup: '',
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'record',
            type: RecordData,
            source: 'compound',
            new: '',
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
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
}