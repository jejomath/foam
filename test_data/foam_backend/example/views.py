from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CellLineSerializer, AssaySerializer, ExperimentSerializer
from .serializers import CellLineWriteSerializer, AssayWriteSerializer, ExperimentWriteSerializer
from .models import CellLine, Assay, Experiment


class CellLineView(viewsets.ModelViewSet):
    serializer_class = CellLineSerializer
    queryset = CellLine.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
    }

class AssayView(viewsets.ModelViewSet):
    serializer_class = AssaySerializer
    queryset = Assay.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'type': ['exact', ],
        'cell_line__id': ['exact', ],
    }

class ExperimentView(viewsets.ModelViewSet):
    serializer_class = ExperimentSerializer
    queryset = Experiment.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'description': ['exact', 'contains', ],
        'start_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
        'assay__id': ['exact', ],
        'plate_map_file': ['exact', ],
        'type': ['exact', ],
    }



class CellLineWriteView(viewsets.ModelViewSet):
    serializer_class = CellLineWriteSerializer
    queryset = CellLine.objects.all()

class AssayWriteView(viewsets.ModelViewSet):
    serializer_class = AssayWriteSerializer
    queryset = Assay.objects.all()

class ExperimentWriteView(viewsets.ModelViewSet):
    serializer_class = ExperimentWriteSerializer
    queryset = Experiment.objects.all()
