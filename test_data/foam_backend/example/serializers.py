from rest_framework import serializers

from .models import Person, Program, ProgramMilestone

from .models import Assay, Experiment, Perturbation

from .models import CellLine

from .models import Indication, Species, Organ, Tissue, CellType, Protein, Gene, Compound



class PersonShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name')

class ProgramShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('id', 'name')

class ProgramMilestoneShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramMilestone
        fields = ('id', 'name')

class AssayShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('id', 'name')

class ExperimentShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'name')

class PerturbationShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perturbation
        fields = ('id', 'name')

class CellLineShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellLine
        fields = ('id', 'name')

class IndicationShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indication
        fields = ('id', 'name')

class SpeciesShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ('id', 'name')

class OrganShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organ
        fields = ('id', 'name')

class TissueShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tissue
        fields = ('id', 'name')

class CellTypeShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellType
        fields = ('id', 'name')

class ProteinShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = ('id', 'name')

class GeneShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('id', 'name')

class CompoundShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compound
        fields = ('id', 'name')



class PersonSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Person
        fields = ('id', 'name', 'given_name', 'family_name', )

class ProgramSerializer(serializers.ModelSerializer):
    
    target = ProteinShortSerializer(read_only=True)
    
    indication = IndicationShortSerializer(read_only=True)
    
    bio_lead = PersonShortSerializer(read_only=True)
    
    chem_lead = PersonShortSerializer(read_only=True)
    
    program_manager = PersonShortSerializer(read_only=True)
    
    class Meta:
        model = Program
        fields = ('id', 'name', 'target', 'indication', 'status', 'started_date', 'stage', 'bio_lead', 'chem_lead', 'program_manager', )

class ProgramMilestoneSerializer(serializers.ModelSerializer):
    
    program = ProgramShortSerializer(read_only=True)
    
    class Meta:
        model = ProgramMilestone
        fields = ('id', 'name', 'program', 'status', 'target_date', 'completed_date', )

class AssaySerializer(serializers.ModelSerializer):
    
    cell_line = CellLineShortSerializer(read_only=True)
    
    for_program = ProgramShortSerializer(read_only=True)
    
    class Meta:
        model = Assay
        fields = ('id', 'name', 'type', 'descr', 'cell_line', 'for_program', )

class ExperimentSerializer(serializers.ModelSerializer):
    
    program = ProgramShortSerializer(read_only=True)
    
    bio_lead = PersonShortSerializer(read_only=True)
    
    assay = AssayShortSerializer(read_only=True)
    
    perturbations = PerturbationShortSerializer(read_only=True)
    
    class Meta:
        model = Experiment
        fields = ('id', 'name', 'description', 'status', 'program', 'bio_lead', 'target_start_date', 'target_duration', 'start_date', 'end_date', 'assay', 'type', 'perturbations', )

class PerturbationSerializer(serializers.ModelSerializer):
    
    compound = CompoundShortSerializer(read_only=True)
    
    class Meta:
        model = Perturbation
        fields = ('id', 'name', 'compound', 'concentration_nm', )

class CellLineSerializer(serializers.ModelSerializer):
    
    species = SpeciesShortSerializer(read_only=True)
    
    organ = OrganShortSerializer(read_only=True)
    
    tissue = TissueShortSerializer(read_only=True)
    
    cell_type = CellTypeShortSerializer(read_only=True)
    
    disease = IndicationShortSerializer(read_only=True)
    
    class Meta:
        model = CellLine
        fields = ('id', 'name', 'species', 'organ', 'tissue', 'cell_type', 'donor_sex', 'donor_age', 'donor_ethnicity', 'donor_health_status', 'disease', )

class IndicationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Indication
        fields = ('id', 'name', )

class SpeciesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Species
        fields = ('id', 'name', )

class OrganSerializer(serializers.ModelSerializer):
    
    species = SpeciesShortSerializer(read_only=True)
    
    class Meta:
        model = Organ
        fields = ('id', 'name', 'species', )

class TissueSerializer(serializers.ModelSerializer):
    
    species = SpeciesShortSerializer(read_only=True)
    
    class Meta:
        model = Tissue
        fields = ('id', 'name', 'species', )

class CellTypeSerializer(serializers.ModelSerializer):
    
    species = SpeciesShortSerializer(read_only=True)
    
    class Meta:
        model = CellType
        fields = ('id', 'name', 'species', )

class ProteinSerializer(serializers.ModelSerializer):
    
    gene = GeneShortSerializer(read_only=True)
    
    species = SpeciesShortSerializer(read_only=True)
    
    class Meta:
        model = Protein
        fields = ('id', 'name', 'gene', 'species', )

class GeneSerializer(serializers.ModelSerializer):
    
    species = SpeciesShortSerializer(read_only=True)
    
    class Meta:
        model = Gene
        fields = ('id', 'name', 'species', )

class CompoundSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Compound
        fields = ('id', 'name', 'smiles', )



class PersonWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('id', 'name', 'given_name', 'family_name', )

class ProgramWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('id', 'name', 'target', 'indication', 'status', 'started_date', 'stage', 'bio_lead', 'chem_lead', 'program_manager', )

class ProgramMilestoneWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramMilestone
        fields = ('id', 'name', 'program', 'status', 'target_date', 'completed_date', )

class AssayWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('id', 'name', 'type', 'descr', 'cell_line', 'for_program', )

class ExperimentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'name', 'description', 'status', 'program', 'bio_lead', 'target_start_date', 'target_duration', 'start_date', 'end_date', 'assay', 'type', 'perturbations', )

class PerturbationWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Perturbation
        fields = ('id', 'name', 'compound', 'concentration_nm', )

class CellLineWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellLine
        fields = ('id', 'name', 'species', 'organ', 'tissue', 'cell_type', 'donor_sex', 'donor_age', 'donor_ethnicity', 'donor_health_status', 'disease', )

class IndicationWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Indication
        fields = ('id', 'name', )

class SpeciesWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = ('id', 'name', )

class OrganWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organ
        fields = ('id', 'name', 'species', )

class TissueWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tissue
        fields = ('id', 'name', 'species', )

class CellTypeWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellType
        fields = ('id', 'name', 'species', )

class ProteinWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = ('id', 'name', 'gene', 'species', )

class GeneWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gene
        fields = ('id', 'name', 'species', )

class CompoundWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Compound
        fields = ('id', 'name', 'smiles', )



class PersonStatsSerializer(serializers.ModelSerializer):
    
    program_bio_lead = serializers.IntegerField(source='program_bio_lead.count', read_only=True)
    
    program_chem_lead = serializers.IntegerField(source='program_chem_lead.count', read_only=True)
    
    program_manager = serializers.IntegerField(source='program_manager.count', read_only=True)
    
    experiment_bio_lead = serializers.IntegerField(source='experiment_bio_lead.count', read_only=True)
    
    class Meta:
        model = Person
        fields = ('id', 'program_bio_lead', 'program_chem_lead', 'program_manager', 'experiment_bio_lead', )

class ProgramStatsSerializer(serializers.ModelSerializer):
    
    program_milestone = serializers.IntegerField(source='program_milestone.count', read_only=True)
    
    assay = serializers.IntegerField(source='assay.count', read_only=True)
    
    experiment = serializers.IntegerField(source='experiment.count', read_only=True)
    
    class Meta:
        model = Program
        fields = ('id', 'program_milestone', 'assay', 'experiment', )

class ProgramMilestoneStatsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProgramMilestone
        fields = ('id', )

class AssayStatsSerializer(serializers.ModelSerializer):
    
    experiment = serializers.IntegerField(source='experiment.count', read_only=True)
    
    class Meta:
        model = Assay
        fields = ('id', 'experiment', )

class ExperimentStatsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Experiment
        fields = ('id', )

class PerturbationStatsSerializer(serializers.ModelSerializer):
    
    experiment = serializers.IntegerField(source='experiment.count', read_only=True)
    
    class Meta:
        model = Perturbation
        fields = ('id', 'experiment', )

class CellLineStatsSerializer(serializers.ModelSerializer):
    
    assay = serializers.IntegerField(source='assay.count', read_only=True)
    
    class Meta:
        model = CellLine
        fields = ('id', 'assay', )

class IndicationStatsSerializer(serializers.ModelSerializer):
    
    program = serializers.IntegerField(source='program.count', read_only=True)
    
    cell_line = serializers.IntegerField(source='cell_line.count', read_only=True)
    
    class Meta:
        model = Indication
        fields = ('id', 'program', 'cell_line', )

class SpeciesStatsSerializer(serializers.ModelSerializer):
    
    cell_line = serializers.IntegerField(source='cell_line.count', read_only=True)
    
    organ = serializers.IntegerField(source='organ.count', read_only=True)
    
    tissue = serializers.IntegerField(source='tissue.count', read_only=True)
    
    cell_type = serializers.IntegerField(source='cell_type.count', read_only=True)
    
    protein = serializers.IntegerField(source='protein.count', read_only=True)
    
    gene = serializers.IntegerField(source='gene.count', read_only=True)
    
    class Meta:
        model = Species
        fields = ('id', 'cell_line', 'organ', 'tissue', 'cell_type', 'protein', 'gene', )

class OrganStatsSerializer(serializers.ModelSerializer):
    
    cell_line = serializers.IntegerField(source='cell_line.count', read_only=True)
    
    class Meta:
        model = Organ
        fields = ('id', 'cell_line', )

class TissueStatsSerializer(serializers.ModelSerializer):
    
    cell_line = serializers.IntegerField(source='cell_line.count', read_only=True)
    
    class Meta:
        model = Tissue
        fields = ('id', 'cell_line', )

class CellTypeStatsSerializer(serializers.ModelSerializer):
    
    cell_line = serializers.IntegerField(source='cell_line.count', read_only=True)
    
    class Meta:
        model = CellType
        fields = ('id', 'cell_line', )

class ProteinStatsSerializer(serializers.ModelSerializer):
    
    program = serializers.IntegerField(source='program.count', read_only=True)
    
    class Meta:
        model = Protein
        fields = ('id', 'program', )

class GeneStatsSerializer(serializers.ModelSerializer):
    
    protein = serializers.IntegerField(source='protein.count', read_only=True)
    
    class Meta:
        model = Gene
        fields = ('id', 'protein', )

class CompoundStatsSerializer(serializers.ModelSerializer):
    
    perturbation = serializers.IntegerField(source='perturbation.count', read_only=True)
    
    class Meta:
        model = Compound
        fields = ('id', 'perturbation', )

