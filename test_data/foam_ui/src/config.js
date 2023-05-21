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
                    pretarget: null,
                    target: 'program_dashboard',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'HTS Dashboard',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Analysis Status',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Experiments',
                links: [{
                    display: 'Review Experiments',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_experiment',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Experiment',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'new_experiment',
                    mode: 'modal',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Assays',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_assay',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Create New Assay',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'new_assay',
                    mode: 'modal',
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Plates',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_plate',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Analysis',
                links: [{
                    display: 'Review Analysis Results',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review CRCs',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Compounds',
                links: [{
                    display: 'Search Compounds',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Compounds Status',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'not_yet',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Review Perturbations',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_perturbation',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Inventory',
                links: [{
                    display: 'Manage Cell Lines',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_cell_line',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Platemaps',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'home',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Project Management',
                links: [{
                    display: 'Admin Pages',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'admin_home',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Org Chart',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_person',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Manage Programs',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_program',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Biology Reference',
                links: [{
                    display: 'Disease Indications',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_indication',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Species',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_species',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Organs',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_organ',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Tissue Types',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_tissue',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Cell Types',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_cell_type',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Proteins',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_protein',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Genes',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_gene',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Compounds',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_compound',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Account',
                links: [{
                    display: 'Log Out',
                    pretargetFn: (params, data, context) => (context.logOut()),
                    pretarget: null,
                    target: null,
                    mode: null,
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
            dataKey: 'find_person',
            rowAction: {
                display: 'Select Person',
                pretargetFn: '',
                pretarget: null,
                target: 'view_person',
                mode: null,
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
            name: 'find_person',
            type: TableData,
            source: 'person',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Person',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_person',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_person: {
        name: 'view_person',
        display: 'View Person',
        config: {
            source: 'person',
            dataKey: 'view_person',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'given_name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'family_name',
                display: null,
                target: null,
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
            name: 'view_person',
            type: RecordData,
            source: 'person',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                chem_lead__id: data.record.id
            }),
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program_manager__id: data.record.id
            }),
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_person',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_person: {
        name: 'edit_person',
        display: 'Edit Person',
        config: {
            source: 'person',
            dataKey: 'edit_person',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'given_name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'family_name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_person',
            type: RecordData,
            source: 'person',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_program: {
        name: 'find_program',
        display: 'Find Program',
        config: {
            source: 'program',
            dataKey: 'find_program',
            rowAction: {
                display: 'Select Program',
                pretargetFn: '',
                pretarget: null,
                target: 'view_program',
                mode: null,
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
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_program',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_program: {
        name: 'view_program',
        display: 'View Program',
        config: {
            source: 'program',
            dataKey: 'view_program',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'indication',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'started_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'stage',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [{
                tablePage: 'find_program_milestone',
                display: 'Milestones',
                paramsFn: (params, data) => ({
                    program__id: data.view_program.id
                }),
            }, {
                tablePage: 'find_assay',
                display: 'Assays',
                paramsFn: (params, data) => ({
                    for_program__id: data.view_program.id
                }),
            }, {
                tablePage: 'find_experiment',
                display: 'Experiments',
                paramsFn: (params, data) => ({
                    program__id: data.view_program.id
                }),
            }, ],
        },
        data: [{
            name: 'view_program',
            type: RecordData,
            source: 'program',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.view_program.id
            }),
        }, {
            name: 'find_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                for_program__id: data.view_program.id
            }),
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.view_program.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_program',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Edit Milestones',
            pretargetFn: '',
            pretarget: null,
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
            pretarget: null,
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
            pretarget: null,
            target: 'new_experiment',
            mode: 'modal',
            paramsFn: (params, data) => ({
                program: data.record
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_program: {
        name: 'edit_program',
        display: 'Edit Program',
        config: {
            source: 'program',
            dataKey: 'edit_program',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'started_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'stage',
                display: null,
                lookup: null,
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
            name: 'edit_program',
            type: RecordData,
            source: 'program',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_program_milestone: {
        name: 'find_program_milestone',
        display: 'Find Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'find_program_milestone',
            rowAction: {
                display: 'Select Program Milestone',
                pretargetFn: '',
                pretarget: null,
                target: 'view_program_milestone',
                mode: null,
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
            name: 'find_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program Milestone',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_program_milestone',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_program_milestone_table: {
        name: 'edit_program_milestone_table',
        display: 'Edit Program Milestone Table',
        config: {
            source: 'program_milestone',
            dataKey: 'edit_program_milestone_table',
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
            name: 'edit_program_milestone_table',
            type: TableData,
            source: 'program_milestone',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Milestone',
            pretargetFn: (params, data, context) => (context.addNew({
                program: params._program
            })),
            pretarget: null,
            target: null,
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save & Close',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    new_program_milestone_table: {
        name: 'new_program_milestone_table',
        display: 'New Program Milestone Table',
        config: {
            source: 'program_milestone',
            dataKey: 'new_program_milestone_table',
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
            name: 'new_program_milestone_table',
            type: TableData,
            source: 'program_milestone',
            new: null,
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
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'New Milestone',
            pretargetFn: (params, data, context) => (context.addNew({
                program: params._program
            })),
            pretarget: null,
            target: null,
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: null,
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_program_milestone: {
        name: 'view_program_milestone',
        display: 'View Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'view_program_milestone',
            viewFields: [{
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'view_program_milestone',
            type: RecordData,
            source: 'program_milestone',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_program_milestone',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_program_milestone: {
        name: 'edit_program_milestone',
        display: 'Edit Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'edit_program_milestone',
            viewFields: [{
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'target_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_program_milestone',
            type: RecordData,
            source: 'program_milestone',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    program_dashboard: {
        name: 'program_dashboard',
        display: 'Program Dashboard',
        config: {
            source: 'program_stats',
            dataKey: 'program_dashboard',
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
            name: 'program_dashboard',
            type: TableData,
            source: 'program_stats',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Figure,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_assay: {
        name: 'find_assay',
        display: 'Find Assay',
        config: {
            source: 'assay',
            dataKey: 'find_assay',
            rowAction: {
                display: 'Select Assay',
                pretargetFn: '',
                pretarget: null,
                target: 'view_assay',
                mode: null,
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
            name: 'find_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Assay',
            pretargetFn: '',
            pretarget: null,
            target: 'new_assay',
            mode: 'modal',
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_assay: {
        name: 'view_assay',
        display: 'View Assay',
        config: {
            source: 'assay',
            dataKey: 'view_assay',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'descr',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: '',
                target: '',
                visibleFn: (params, data) => (data.type === 'VITRO'),
            }, {
                field: 'for_program',
                display: null,
                target: null,
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
            name: 'view_assay',
            type: RecordData,
            source: 'assay',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                assay__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_assay',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: null,
            target: 'new_experiment',
            mode: 'modal',
            paramsFn: (params, data) => ({
                assay: data.record
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    new_assay: {
        name: 'new_assay',
        display: 'New Assay',
        config: {
            source: 'assay',
            dataKey: 'new_assay',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                lookup: null,
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
            name: 'new_assay',
            type: RecordData,
            source: 'assay',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'edit_assay',
            mode: null,
            paramsFn: (params, data) => ({
                id: data.id
            }),
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_assay: {
        name: 'edit_assay',
        display: 'Edit Assay',
        config: {
            source: 'assay',
            dataKey: 'edit_assay',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [{
                field: 'descr',
                display: null,
                lookup: null,
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
            name: 'edit_assay',
            type: RecordData,
            source: 'assay',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_experiment: {
        name: 'find_experiment',
        display: 'Find Experiment',
        config: {
            source: 'experiment',
            dataKey: 'find_experiment',
            rowAction: {
                display: 'Select Experiment',
                pretargetFn: '',
                pretarget: null,
                target: 'view_experiment',
                mode: null,
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
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: null,
            target: 'new_experiment',
            mode: 'modal',
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_experiment: {
        name: 'view_experiment',
        display: 'View Experiment',
        config: {
            source: 'experiment',
            dataKey: 'view_experiment',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'description',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'start_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'end_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'assay',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: null,
                target: null,
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
            name: 'view_experiment',
            type: RecordData,
            source: 'experiment',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_plate',
            type: TableData,
            source: 'plate',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                experiment__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_experiment',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Add Plate',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_plate',
            mode: 'modal',
            paramsFn: (params, data) => ({
                experiment: data.record
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    new_experiment: {
        name: 'new_experiment',
        display: 'New Experiment',
        config: {
            source: 'experiment',
            dataKey: 'new_experiment',
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
            name: 'new_experiment',
            type: RecordData,
            source: 'experiment',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'edit_experiment',
            mode: null,
            paramsFn: (params, data) => ({
                id: data.id
            }),
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_experiment: {
        name: 'edit_experiment',
        display: 'Edit Experiment',
        config: {
            source: 'experiment',
            dataKey: 'edit_experiment',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [{
                field: 'description',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: '',
                lookup: 'find_person',
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'start_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'end_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_assay',
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                lookup: null,
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
            name: 'edit_experiment',
            type: RecordData,
            source: 'experiment',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_plate: {
        name: 'find_plate',
        display: 'Find Plate',
        config: {
            source: 'plate',
            dataKey: 'find_plate',
            rowAction: {
                display: 'Select Plate',
                pretargetFn: '',
                pretarget: null,
                target: 'view_plate',
                mode: null,
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
            name: 'find_plate',
            type: TableData,
            source: 'plate',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_plate',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_plate: {
        name: 'view_plate',
        display: 'View Plate',
        config: {
            source: 'plate',
            dataKey: 'view_plate',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'experiment',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'row_count',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'column_count',
                display: null,
                target: null,
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
            name: 'view_plate',
            type: RecordData,
            source: 'plate',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_plate_well',
            type: TableData,
            source: 'plate_well',
            new: null,
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
            pretarget: null,
            target: 'edit_plate',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Edit Wells',
            pretargetFn: '',
            pretarget: null,
            target: 'find_plate_well',
            mode: null,
            paramsFn: (params, data) => ({
                plate__id: data.record.id,
                rows: data.record.row_count,
                cols: data.record.column_count
            }),
            visibleFn: '',
        }, {
            display: 'View Plate Map',
            pretargetFn: '',
            pretarget: null,
            target: 'view_plate_map',
            mode: null,
            paramsFn: (params, data) => ({
                plate__id: data.record.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_plate: {
        name: 'edit_plate',
        display: 'Edit Plate',
        config: {
            source: 'plate',
            dataKey: 'edit_plate',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                lookup: 'find_experiment',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'column_count',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_plate',
            type: RecordData,
            source: 'plate',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_plate_well: {
        name: 'find_plate_well',
        display: 'Find Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'find_plate_well',
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
            name: 'find_plate_well',
            type: TableData,
            source: 'plate_well',
            new: null,
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
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.find_plate_well.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_plate_map: {
        name: 'view_plate_map',
        display: 'View Plate Map',
        config: {
            source: 'plate_well',
            dataKey: 'view_plate_map',
            rowField: 'row',
            columnField: 'column',
            displayField: 'purpose',
        },
        data: [{
            name: 'view_plate_map',
            type: TableData,
            source: 'plate_well',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Grid,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.view_plate_map.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_plate_grid: {
        name: 'view_plate_grid',
        display: 'View Plate Grid',
        config: {
            direction: 'vertical',
            cells: [{
                name: 'form_cell',
                display: '',
                config: {
                    source: 'plate',
                    dataKey: 'form_cell',
                    viewFields: [{
                        field: 'name',
                        display: null,
                        target: null,
                        visibleFn: '',
                    }, {
                        field: 'experiment',
                        display: null,
                        target: null,
                        visibleFn: '',
                    }, ],
                    editFields: [],
                    referenceTables: [],
                },
                data: [],
                type: Form,
                buttons: [],
            }, {
                name: 'grid_cell',
                display: 'Plate Map',
                config: {
                    source: 'plate_well',
                    dataKey: 'grid_cell',
                    rowField: 'row',
                    columnField: 'column',
                    displayField: 'purpose',
                },
                data: [],
                type: Grid,
                buttons: [],
            }, ],
        },
        data: [{
            name: 'form_cell',
            type: RecordData,
            source: 'plate',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'grid_cell',
            type: TableData,
            source: 'plate_well',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Layout,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_perturbation: {
        name: 'find_perturbation',
        display: 'Find Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'find_perturbation',
            rowAction: {
                display: 'Select Perturbation',
                pretargetFn: '',
                pretarget: null,
                target: 'view_perturbation',
                mode: null,
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
            name: 'find_perturbation',
            type: TableData,
            source: 'perturbation',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_perturbation: {
        name: 'view_perturbation',
        display: 'View Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'view_perturbation',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'compound',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: null,
                target: null,
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
            name: 'view_perturbation',
            type: RecordData,
            source: 'perturbation',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbations__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_cell_line: {
        name: 'find_cell_line',
        display: 'Find Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'find_cell_line',
            rowAction: {
                display: 'Select Cell Line',
                pretargetFn: '',
                pretarget: null,
                target: 'view_cell_line',
                mode: null,
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
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Cell Line',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_cell_line',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_cell_line: {
        name: 'view_cell_line',
        display: 'View Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'view_cell_line',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'organ',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'tissue',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'disease',
                display: null,
                target: null,
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
            name: 'view_cell_line',
            type: RecordData,
            source: 'cell_line',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_line__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_cell_line',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_cell_line: {
        name: 'edit_cell_line',
        display: 'Edit Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'edit_cell_line',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: null,
                lookup: null,
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
            name: 'edit_cell_line',
            type: RecordData,
            source: 'cell_line',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_indication: {
        name: 'find_indication',
        display: 'Find Indication',
        config: {
            source: 'indication',
            dataKey: 'find_indication',
            rowAction: {
                display: 'Select Indication',
                pretargetFn: '',
                pretarget: null,
                target: 'view_indication',
                mode: null,
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
            name: 'find_indication',
            type: TableData,
            source: 'indication',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_indication: {
        name: 'view_indication',
        display: 'View Indication',
        config: {
            source: 'indication',
            dataKey: 'view_indication',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
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
            name: 'view_indication',
            type: RecordData,
            source: 'indication',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                indication__id: data.record.id
            }),
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                disease__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_species: {
        name: 'find_species',
        display: 'Find Species',
        config: {
            source: 'species',
            dataKey: 'find_species',
            rowAction: {
                display: 'Select Species',
                pretargetFn: '',
                pretarget: null,
                target: 'view_species',
                mode: null,
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
            name: 'find_species',
            type: TableData,
            source: 'species',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_species: {
        name: 'view_species',
        display: 'View Species',
        config: {
            source: 'species',
            dataKey: 'view_species',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
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
            name: 'view_species',
            type: RecordData,
            source: 'species',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_organ',
            type: TableData,
            source: 'organ',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_tissue',
            type: TableData,
            source: 'tissue',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_cell_type',
            type: TableData,
            source: 'cell_type',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_gene',
            type: TableData,
            source: 'gene',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_organ: {
        name: 'find_organ',
        display: 'Find Organ',
        config: {
            source: 'organ',
            dataKey: 'find_organ',
            rowAction: {
                display: 'Select Organ',
                pretargetFn: '',
                pretarget: null,
                target: 'view_organ',
                mode: null,
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
            name: 'find_organ',
            type: TableData,
            source: 'organ',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_organ: {
        name: 'view_organ',
        display: 'View Organ',
        config: {
            source: 'organ',
            dataKey: 'view_organ',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_organ',
            type: RecordData,
            source: 'organ',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                organ__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_tissue: {
        name: 'find_tissue',
        display: 'Find Tissue',
        config: {
            source: 'tissue',
            dataKey: 'find_tissue',
            rowAction: {
                display: 'Select Tissue',
                pretargetFn: '',
                pretarget: null,
                target: 'view_tissue',
                mode: null,
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
            name: 'find_tissue',
            type: TableData,
            source: 'tissue',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_tissue: {
        name: 'view_tissue',
        display: 'View Tissue',
        config: {
            source: 'tissue',
            dataKey: 'view_tissue',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_tissue',
            type: RecordData,
            source: 'tissue',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                tissue__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_cell_type: {
        name: 'find_cell_type',
        display: 'Find Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'find_cell_type',
            rowAction: {
                display: 'Select Cell Type',
                pretargetFn: '',
                pretarget: null,
                target: 'view_cell_type',
                mode: null,
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
            name: 'find_cell_type',
            type: TableData,
            source: 'cell_type',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_cell_type: {
        name: 'view_cell_type',
        display: 'View Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'view_cell_type',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_cell_type',
            type: RecordData,
            source: 'cell_type',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_type__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_protein: {
        name: 'find_protein',
        display: 'Find Protein',
        config: {
            source: 'protein',
            dataKey: 'find_protein',
            rowAction: {
                display: 'Select Protein',
                pretargetFn: '',
                pretarget: null,
                target: 'view_protein',
                mode: null,
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
            name: 'find_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_protein: {
        name: 'view_protein',
        display: 'View Protein',
        config: {
            source: 'protein',
            dataKey: 'view_protein',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'gene',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_protein',
            type: RecordData,
            source: 'protein',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                target__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_gene: {
        name: 'find_gene',
        display: 'Find Gene',
        config: {
            source: 'gene',
            dataKey: 'find_gene',
            rowAction: {
                display: 'Select Gene',
                pretargetFn: '',
                pretarget: null,
                target: 'view_gene',
                mode: null,
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
            name: 'find_gene',
            type: TableData,
            source: 'gene',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_gene: {
        name: 'view_gene',
        display: 'View Gene',
        config: {
            source: 'gene',
            dataKey: 'view_gene',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_gene',
            type: RecordData,
            source: 'gene',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                gene__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_compound: {
        name: 'find_compound',
        display: 'Find Compound',
        config: {
            source: 'compound',
            dataKey: 'find_compound',
            rowAction: {
                display: 'Select Compound',
                pretargetFn: '',
                pretarget: null,
                target: 'view_compound',
                mode: null,
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
            name: 'find_compound',
            type: TableData,
            source: 'compound',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_compound: {
        name: 'view_compound',
        display: 'View Compound',
        config: {
            source: 'compound',
            dataKey: 'view_compound',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'smiles',
                display: null,
                target: null,
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
            name: 'view_compound',
            type: RecordData,
            source: 'compound',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_perturbation',
            type: TableData,
            source: 'perturbation',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                compound__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
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
                    pretarget: null,
                    target: 'find_admin_person',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Program',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_program',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Program Milestone',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_program_milestone',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Experiments',
                links: [{
                    display: 'Assay',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_assay',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Experiment',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_experiment',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Perturbation',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_perturbation',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Plate',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_plate',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Plate Well',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_plate_well',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Inventory',
                links: [{
                    display: 'Cell Line',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_cell_line',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, ],
            }, {
                name: 'Biology Reference',
                links: [{
                    display: 'Indication',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_indication',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Species',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_species',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Organ',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_organ',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Tissue',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_tissue',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Cell Type',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_cell_type',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Protein',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_protein',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Gene',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_gene',
                    mode: null,
                    paramsFn: '',
                    visibleFn: '',
                }, {
                    display: 'Compound',
                    pretargetFn: '',
                    pretarget: null,
                    target: 'find_admin_compound',
                    mode: null,
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
            dataKey: 'find_admin_person',
            rowAction: {
                display: 'Select Person',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_person',
                mode: null,
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
            name: 'find_admin_person',
            type: TableData,
            source: 'person',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Person',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_person',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_person: {
        name: 'view_admin_person',
        display: 'View Admin Person',
        config: {
            source: 'person',
            dataKey: 'view_admin_person',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'given_name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'family_name',
                display: null,
                target: null,
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
            name: 'view_admin_person',
            type: RecordData,
            source: 'person',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                chem_lead__id: data.record.id
            }),
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program_manager__id: data.record.id
            }),
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                bio_lead__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_person',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_person: {
        name: 'edit_admin_person',
        display: 'Edit Admin Person',
        config: {
            source: 'person',
            dataKey: 'edit_admin_person',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'given_name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'family_name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_person',
            type: RecordData,
            source: 'person',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_program: {
        name: 'find_admin_program',
        display: 'Find Admin Program',
        config: {
            source: 'program',
            dataKey: 'find_admin_program',
            rowAction: {
                display: 'Select Program',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_program',
                mode: null,
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
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_program',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_program: {
        name: 'view_admin_program',
        display: 'View Admin Program',
        config: {
            source: 'program',
            dataKey: 'view_admin_program',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'indication',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'started_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'stage',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'chem_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program_manager',
                display: null,
                target: null,
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
            name: 'view_admin_program',
            type: RecordData,
            source: 'program',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, {
            name: 'find_admin_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                for_program__id: data.record.id
            }),
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                program__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_program',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_program: {
        name: 'edit_admin_program',
        display: 'Edit Admin Program',
        config: {
            source: 'program',
            dataKey: 'edit_admin_program',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'started_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'stage',
                display: null,
                lookup: null,
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
            name: 'edit_admin_program',
            type: RecordData,
            source: 'program',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_program_milestone: {
        name: 'find_admin_program_milestone',
        display: 'Find Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'find_admin_program_milestone',
            rowAction: {
                display: 'Select Program Milestone',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_program_milestone',
                mode: null,
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
            name: 'find_admin_program_milestone',
            type: TableData,
            source: 'program_milestone',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Program Milestone',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_program_milestone',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_program_milestone: {
        name: 'view_admin_program_milestone',
        display: 'View Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'view_admin_program_milestone',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'view_admin_program_milestone',
            type: RecordData,
            source: 'program_milestone',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_program_milestone',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_program_milestone: {
        name: 'edit_admin_program_milestone',
        display: 'Edit Admin Program Milestone',
        config: {
            source: 'program_milestone',
            dataKey: 'edit_admin_program_milestone',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'program',
                display: '',
                lookup: 'find_admin_program',
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'target_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'completed_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_program_milestone',
            type: RecordData,
            source: 'program_milestone',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_assay: {
        name: 'find_admin_assay',
        display: 'Find Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'find_admin_assay',
            rowAction: {
                display: 'Select Assay',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_assay',
                mode: null,
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
            name: 'find_admin_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Assay',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_assay',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_assay: {
        name: 'view_admin_assay',
        display: 'View Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'view_admin_assay',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'descr',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'cell_line',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'for_program',
                display: null,
                target: null,
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
            name: 'view_admin_assay',
            type: RecordData,
            source: 'assay',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                assay__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_assay',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_assay: {
        name: 'edit_admin_assay',
        display: 'Edit Admin Assay',
        config: {
            source: 'assay',
            dataKey: 'edit_admin_assay',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'descr',
                display: null,
                lookup: null,
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
            name: 'edit_admin_assay',
            type: RecordData,
            source: 'assay',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_experiment: {
        name: 'find_admin_experiment',
        display: 'Find Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'find_admin_experiment',
            rowAction: {
                display: 'Select Experiment',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_experiment',
                mode: null,
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
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Experiment',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_experiment',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_experiment: {
        name: 'view_admin_experiment',
        display: 'View Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'view_admin_experiment',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'description',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'program',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'bio_lead',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_start_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'start_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'end_date',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'assay',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'perturbations',
                display: null,
                target: null,
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
            name: 'view_admin_experiment',
            type: RecordData,
            source: 'experiment',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_plate',
            type: TableData,
            source: 'plate',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                experiment__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_experiment',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_experiment: {
        name: 'edit_admin_experiment',
        display: 'Edit Admin Experiment',
        config: {
            source: 'experiment',
            dataKey: 'edit_admin_experiment',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'description',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'status',
                display: null,
                lookup: null,
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
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'target_duration',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'start_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'end_date',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'assay',
                display: '',
                lookup: 'find_admin_assay',
                visibleFn: '',
            }, {
                field: 'type',
                display: null,
                lookup: null,
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
            name: 'edit_admin_experiment',
            type: RecordData,
            source: 'experiment',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_perturbation: {
        name: 'find_admin_perturbation',
        display: 'Find Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'find_admin_perturbation',
            rowAction: {
                display: 'Select Perturbation',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_perturbation',
                mode: null,
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
            name: 'find_admin_perturbation',
            type: TableData,
            source: 'perturbation',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Perturbation',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_perturbation',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_perturbation: {
        name: 'view_admin_perturbation',
        display: 'View Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'view_admin_perturbation',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'compound',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: null,
                target: null,
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
            name: 'view_admin_perturbation',
            type: RecordData,
            source: 'perturbation',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_experiment',
            type: TableData,
            source: 'experiment',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbations__id: data.record.id
            }),
        }, {
            name: 'find_admin_plate_well',
            type: TableData,
            source: 'plate_well',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                perturbation__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_perturbation',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_perturbation: {
        name: 'edit_admin_perturbation',
        display: 'Edit Admin Perturbation',
        config: {
            source: 'perturbation',
            dataKey: 'edit_admin_perturbation',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'compound',
                display: '',
                lookup: 'find_admin_compound',
                visibleFn: '',
            }, {
                field: 'concentration_nm',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_perturbation',
            type: RecordData,
            source: 'perturbation',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_plate: {
        name: 'find_admin_plate',
        display: 'Find Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'find_admin_plate',
            rowAction: {
                display: 'Select Plate',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_plate',
                mode: null,
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
            name: 'find_admin_plate',
            type: TableData,
            source: 'plate',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_plate',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_plate: {
        name: 'view_admin_plate',
        display: 'View Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'view_admin_plate',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'experiment',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'row_count',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'column_count',
                display: null,
                target: null,
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
            name: 'view_admin_plate',
            type: RecordData,
            source: 'plate',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_plate_well',
            type: TableData,
            source: 'plate_well',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                plate__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_plate',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_plate: {
        name: 'edit_admin_plate',
        display: 'Edit Admin Plate',
        config: {
            source: 'plate',
            dataKey: 'edit_admin_plate',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'experiment',
                display: '',
                lookup: 'find_admin_experiment',
                visibleFn: '',
            }, {
                field: 'row_count',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'column_count',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_plate',
            type: RecordData,
            source: 'plate',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_plate_well: {
        name: 'find_admin_plate_well',
        display: 'Find Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'find_admin_plate_well',
            rowAction: {
                display: 'Select Plate Well',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_plate_well',
                mode: null,
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
            name: 'find_admin_plate_well',
            type: TableData,
            source: 'plate_well',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Plate Well',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_plate_well',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_plate_well: {
        name: 'view_admin_plate_well',
        display: 'View Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'view_admin_plate_well',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'plate',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'row',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'column',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'purpose',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'perturbation',
                display: null,
                target: null,
                visibleFn: '',
            }, ],
            editFields: [],
            referenceTables: [],
        },
        data: [{
            name: 'view_admin_plate_well',
            type: RecordData,
            source: 'plate_well',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_plate_well',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_plate_well: {
        name: 'edit_admin_plate_well',
        display: 'Edit Admin Plate Well',
        config: {
            source: 'plate_well',
            dataKey: 'edit_admin_plate_well',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'plate',
                display: '',
                lookup: 'find_admin_plate',
                visibleFn: '',
            }, {
                field: 'row',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'column',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'purpose',
                display: null,
                lookup: null,
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
            name: 'edit_admin_plate_well',
            type: RecordData,
            source: 'plate_well',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_cell_line: {
        name: 'find_admin_cell_line',
        display: 'Find Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'find_admin_cell_line',
            rowAction: {
                display: 'Select Cell Line',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_cell_line',
                mode: null,
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
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Cell Line',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_cell_line',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_cell_line: {
        name: 'view_admin_cell_line',
        display: 'View Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'view_admin_cell_line',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'organ',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'tissue',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'cell_type',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_sex',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'disease',
                display: null,
                target: null,
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
            name: 'view_admin_cell_line',
            type: RecordData,
            source: 'cell_line',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_assay',
            type: TableData,
            source: 'assay',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_line__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_cell_line',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_cell_line: {
        name: 'edit_admin_cell_line',
        display: 'Edit Admin Cell Line',
        config: {
            source: 'cell_line',
            dataKey: 'edit_admin_cell_line',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_age',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_ethnicity',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'donor_health_status',
                display: null,
                lookup: null,
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
            name: 'edit_admin_cell_line',
            type: RecordData,
            source: 'cell_line',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_indication: {
        name: 'find_admin_indication',
        display: 'Find Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'find_admin_indication',
            rowAction: {
                display: 'Select Indication',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_indication',
                mode: null,
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
            name: 'find_admin_indication',
            type: TableData,
            source: 'indication',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Indication',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_indication',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_indication: {
        name: 'view_admin_indication',
        display: 'View Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'view_admin_indication',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
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
            name: 'view_admin_indication',
            type: RecordData,
            source: 'indication',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                indication__id: data.record.id
            }),
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                disease__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_indication',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_indication: {
        name: 'edit_admin_indication',
        display: 'Edit Admin Indication',
        config: {
            source: 'indication',
            dataKey: 'edit_admin_indication',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_indication',
            type: RecordData,
            source: 'indication',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_species: {
        name: 'find_admin_species',
        display: 'Find Admin Species',
        config: {
            source: 'species',
            dataKey: 'find_admin_species',
            rowAction: {
                display: 'Select Species',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_species',
                mode: null,
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
            name: 'find_admin_species',
            type: TableData,
            source: 'species',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Species',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_species',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_species: {
        name: 'view_admin_species',
        display: 'View Admin Species',
        config: {
            source: 'species',
            dataKey: 'view_admin_species',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
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
            name: 'view_admin_species',
            type: RecordData,
            source: 'species',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_organ',
            type: TableData,
            source: 'organ',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_tissue',
            type: TableData,
            source: 'tissue',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_cell_type',
            type: TableData,
            source: 'cell_type',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, {
            name: 'find_admin_gene',
            type: TableData,
            source: 'gene',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                species__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_species',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_species: {
        name: 'edit_admin_species',
        display: 'Edit Admin Species',
        config: {
            source: 'species',
            dataKey: 'edit_admin_species',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_species',
            type: RecordData,
            source: 'species',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_organ: {
        name: 'find_admin_organ',
        display: 'Find Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'find_admin_organ',
            rowAction: {
                display: 'Select Organ',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_organ',
                mode: null,
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
            name: 'find_admin_organ',
            type: TableData,
            source: 'organ',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Organ',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_organ',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_organ: {
        name: 'view_admin_organ',
        display: 'View Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'view_admin_organ',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_admin_organ',
            type: RecordData,
            source: 'organ',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                organ__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_organ',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_organ: {
        name: 'edit_admin_organ',
        display: 'Edit Admin Organ',
        config: {
            source: 'organ',
            dataKey: 'edit_admin_organ',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
            name: 'edit_admin_organ',
            type: RecordData,
            source: 'organ',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_tissue: {
        name: 'find_admin_tissue',
        display: 'Find Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'find_admin_tissue',
            rowAction: {
                display: 'Select Tissue',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_tissue',
                mode: null,
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
            name: 'find_admin_tissue',
            type: TableData,
            source: 'tissue',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Tissue',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_tissue',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_tissue: {
        name: 'view_admin_tissue',
        display: 'View Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'view_admin_tissue',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_admin_tissue',
            type: RecordData,
            source: 'tissue',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                tissue__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_tissue',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_tissue: {
        name: 'edit_admin_tissue',
        display: 'Edit Admin Tissue',
        config: {
            source: 'tissue',
            dataKey: 'edit_admin_tissue',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
            name: 'edit_admin_tissue',
            type: RecordData,
            source: 'tissue',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_cell_type: {
        name: 'find_admin_cell_type',
        display: 'Find Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'find_admin_cell_type',
            rowAction: {
                display: 'Select Cell Type',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_cell_type',
                mode: null,
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
            name: 'find_admin_cell_type',
            type: TableData,
            source: 'cell_type',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Cell Type',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_cell_type',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_cell_type: {
        name: 'view_admin_cell_type',
        display: 'View Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'view_admin_cell_type',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_admin_cell_type',
            type: RecordData,
            source: 'cell_type',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_cell_line',
            type: TableData,
            source: 'cell_line',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                cell_type__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_cell_type',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_cell_type: {
        name: 'edit_admin_cell_type',
        display: 'Edit Admin Cell Type',
        config: {
            source: 'cell_type',
            dataKey: 'edit_admin_cell_type',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
            name: 'edit_admin_cell_type',
            type: RecordData,
            source: 'cell_type',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_protein: {
        name: 'find_admin_protein',
        display: 'Find Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'find_admin_protein',
            rowAction: {
                display: 'Select Protein',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_protein',
                mode: null,
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
            name: 'find_admin_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Protein',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_protein',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_protein: {
        name: 'view_admin_protein',
        display: 'View Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'view_admin_protein',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'gene',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_admin_protein',
            type: RecordData,
            source: 'protein',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_program',
            type: TableData,
            source: 'program',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                target__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_protein',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_protein: {
        name: 'edit_admin_protein',
        display: 'Edit Admin Protein',
        config: {
            source: 'protein',
            dataKey: 'edit_admin_protein',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
            name: 'edit_admin_protein',
            type: RecordData,
            source: 'protein',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_gene: {
        name: 'find_admin_gene',
        display: 'Find Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'find_admin_gene',
            rowAction: {
                display: 'Select Gene',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_gene',
                mode: null,
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
            name: 'find_admin_gene',
            type: TableData,
            source: 'gene',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Gene',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_gene',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_gene: {
        name: 'view_admin_gene',
        display: 'View Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'view_admin_gene',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'species',
                display: null,
                target: null,
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
            name: 'view_admin_gene',
            type: RecordData,
            source: 'gene',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_protein',
            type: TableData,
            source: 'protein',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                gene__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_gene',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_gene: {
        name: 'edit_admin_gene',
        display: 'Edit Admin Gene',
        config: {
            source: 'gene',
            dataKey: 'edit_admin_gene',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
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
            name: 'edit_admin_gene',
            type: RecordData,
            source: 'gene',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    find_admin_compound: {
        name: 'find_admin_compound',
        display: 'Find Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'find_admin_compound',
            rowAction: {
                display: 'Select Compound',
                pretargetFn: '',
                pretarget: null,
                target: 'view_admin_compound',
                mode: null,
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
            name: 'find_admin_compound',
            type: TableData,
            source: 'compound',
            new: null,
            onLoadFn: '',
            paramsFn: '',
        }, ],
        type: Table,
        buttons: [{
            display: 'New Compound',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_compound',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    view_admin_compound: {
        name: 'view_admin_compound',
        display: 'View Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'view_admin_compound',
            viewFields: [{
                field: 'name',
                display: null,
                target: null,
                visibleFn: '',
            }, {
                field: 'smiles',
                display: null,
                target: null,
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
            name: 'view_admin_compound',
            type: RecordData,
            source: 'compound',
            new: null,
            newFn: '',
            paramsFn: '',
        }, {
            name: 'find_admin_perturbation',
            type: TableData,
            source: 'perturbation',
            new: null,
            onLoadFn: '',
            paramsFn: (params, data) => ({
                compound__id: data.record.id
            }),
        }, ],
        type: Form,
        buttons: [{
            display: 'Edit',
            pretargetFn: '',
            pretarget: null,
            target: 'edit_admin_compound',
            mode: null,
            paramsFn: (params, data) => ({
                id: params.id
            }),
            visibleFn: '',
        }, {
            display: 'Done',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
    edit_admin_compound: {
        name: 'edit_admin_compound',
        display: 'Edit Admin Compound',
        config: {
            source: 'compound',
            dataKey: 'edit_admin_compound',
            viewFields: [],
            editFields: [{
                field: 'name',
                display: null,
                lookup: null,
                visibleFn: '',
            }, {
                field: 'smiles',
                display: null,
                lookup: null,
                visibleFn: '',
            }, ],
            referenceTables: [],
        },
        data: [{
            name: 'edit_admin_compound',
            type: RecordData,
            source: 'compound',
            new: null,
            newFn: '',
            paramsFn: '',
        }, ],
        type: Form,
        buttons: [{
            display: 'Save',
            pretargetFn: (params, data, context) => (context.clients.record.save()),
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, {
            display: 'Cancel',
            pretargetFn: '',
            pretarget: null,
            target: 'back',
            mode: null,
            paramsFn: '',
            visibleFn: '',
        }, ],
    },
}