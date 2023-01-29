from django.shortcuts import render
from rest_framework import viewsets

from .serializers import PersonSerializer, ProgramSerializer, ProgramMilestoneSerializer
from .serializers import PersonWriteSerializer, ProgramWriteSerializer, ProgramMilestoneWriteSerializer

from .serializers import AssaySerializer, ExperimentSerializer, PerturbationSerializer
from .serializers import AssayWriteSerializer, ExperimentWriteSerializer, PerturbationWriteSerializer

from .serializers import CellLineSerializer
from .serializers import CellLineWriteSerializer

from .serializers import IndicationSerializer, SpeciesSerializer, OrganSerializer, TissueSerializer, CellTypeSerializer, ProteinSerializer, GeneSerializer, CompoundSerializer
from .serializers import IndicationWriteSerializer, SpeciesWriteSerializer, OrganWriteSerializer, TissueWriteSerializer, CellTypeWriteSerializer, ProteinWriteSerializer, GeneWriteSerializer, CompoundWriteSerializer


from .models import Person, Program, ProgramMilestone

from .models import Assay, Experiment, Perturbation

from .models import CellLine

from .models import Indication, Species, Organ, Tissue, CellType, Protein, Gene, Compound



class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'given_name': ['exact', 'contains', ],
        'family_name': ['exact', 'contains', ],
    }

class ProgramView(viewsets.ModelViewSet):
    serializer_class = ProgramSerializer
    queryset = Program.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'target__id': ['exact', ],
        'indication__id': ['exact', ],
        'status': ['exact', ],
        'started_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'stage': ['exact', ],
        'bio_lead__id': ['exact', ],
        'chem_lead__id': ['exact', ],
        'program_manager__id': ['exact', ],
    }

class ProgramMilestoneView(viewsets.ModelViewSet):
    serializer_class = ProgramMilestoneSerializer
    queryset = ProgramMilestone.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'program__id': ['exact', ],
        'status': ['exact', ],
        'target_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'completed_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
    }

class AssayView(viewsets.ModelViewSet):
    serializer_class = AssaySerializer
    queryset = Assay.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'type': ['exact', ],
        'descr': ['exact', 'contains', ],
        'cell_line__id': ['exact', ],
        'for_program__id': ['exact', ],
    }

class ExperimentView(viewsets.ModelViewSet):
    serializer_class = ExperimentSerializer
    queryset = Experiment.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'description': ['exact', 'contains', ],
        'status': ['exact', ],
        'program__id': ['exact', ],
        'bio_lead__id': ['exact', ],
        'target_start_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'target_duration': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'start_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'end_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'assay__id': ['exact', ],
        'type': ['exact', ],
        'perturbations__id': ['exact', ],
    }

class PerturbationView(viewsets.ModelViewSet):
    serializer_class = PerturbationSerializer
    queryset = Perturbation.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'compound__id': ['exact', ],
        'concentration_nm': ['exact', 'gt', 'lt', 'gte', 'lte', ],
    }

class CellLineView(viewsets.ModelViewSet):
    serializer_class = CellLineSerializer
    queryset = CellLine.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'species__id': ['exact', ],
        'organ__id': ['exact', ],
        'tissue__id': ['exact', ],
        'cell_type__id': ['exact', ],
        'donor_sex': ['exact', ],
        'donor_age': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'donor_ethnicity': ['exact', ],
        'donor_health_status': ['exact', ],
        'disease__id': ['exact', ],
    }

class IndicationView(viewsets.ModelViewSet):
    serializer_class = IndicationSerializer
    queryset = Indication.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
    }

class SpeciesView(viewsets.ModelViewSet):
    serializer_class = SpeciesSerializer
    queryset = Species.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
    }

class OrganView(viewsets.ModelViewSet):
    serializer_class = OrganSerializer
    queryset = Organ.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'species__id': ['exact', ],
    }

class TissueView(viewsets.ModelViewSet):
    serializer_class = TissueSerializer
    queryset = Tissue.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'species__id': ['exact', ],
    }

class CellTypeView(viewsets.ModelViewSet):
    serializer_class = CellTypeSerializer
    queryset = CellType.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'species__id': ['exact', ],
    }

class ProteinView(viewsets.ModelViewSet):
    serializer_class = ProteinSerializer
    queryset = Protein.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'gene__id': ['exact', ],
        'species__id': ['exact', ],
    }

class GeneView(viewsets.ModelViewSet):
    serializer_class = GeneSerializer
    queryset = Gene.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'species__id': ['exact', ],
    }

class CompoundView(viewsets.ModelViewSet):
    serializer_class = CompoundSerializer
    queryset = Compound.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'smiles': ['exact', 'contains', ],
    }



class PersonWriteView(viewsets.ModelViewSet):
    serializer_class = PersonWriteSerializer
    queryset = Person.objects.all()

class ProgramWriteView(viewsets.ModelViewSet):
    serializer_class = ProgramWriteSerializer
    queryset = Program.objects.all()

class ProgramMilestoneWriteView(viewsets.ModelViewSet):
    serializer_class = ProgramMilestoneWriteSerializer
    queryset = ProgramMilestone.objects.all()

class AssayWriteView(viewsets.ModelViewSet):
    serializer_class = AssayWriteSerializer
    queryset = Assay.objects.all()

class ExperimentWriteView(viewsets.ModelViewSet):
    serializer_class = ExperimentWriteSerializer
    queryset = Experiment.objects.all()

class PerturbationWriteView(viewsets.ModelViewSet):
    serializer_class = PerturbationWriteSerializer
    queryset = Perturbation.objects.all()

class CellLineWriteView(viewsets.ModelViewSet):
    serializer_class = CellLineWriteSerializer
    queryset = CellLine.objects.all()

class IndicationWriteView(viewsets.ModelViewSet):
    serializer_class = IndicationWriteSerializer
    queryset = Indication.objects.all()

class SpeciesWriteView(viewsets.ModelViewSet):
    serializer_class = SpeciesWriteSerializer
    queryset = Species.objects.all()

class OrganWriteView(viewsets.ModelViewSet):
    serializer_class = OrganWriteSerializer
    queryset = Organ.objects.all()

class TissueWriteView(viewsets.ModelViewSet):
    serializer_class = TissueWriteSerializer
    queryset = Tissue.objects.all()

class CellTypeWriteView(viewsets.ModelViewSet):
    serializer_class = CellTypeWriteSerializer
    queryset = CellType.objects.all()

class ProteinWriteView(viewsets.ModelViewSet):
    serializer_class = ProteinWriteSerializer
    queryset = Protein.objects.all()

class GeneWriteView(viewsets.ModelViewSet):
    serializer_class = GeneWriteSerializer
    queryset = Gene.objects.all()

class CompoundWriteView(viewsets.ModelViewSet):
    serializer_class = CompoundWriteSerializer
    queryset = Compound.objects.all()
