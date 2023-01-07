from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AssaySerializer, ExperimentSerializer
from .serializers import AssayWriteSerializer, ExperimentWriteSerializer
from .models import Assay, Experiment


class AssayView(viewsets.ModelViewSet):
    serializer_class = AssaySerializer
    queryset = Assay.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
    }

class ExperimentView(viewsets.ModelViewSet):
    serializer_class = ExperimentSerializer
    queryset = Experiment.objects.all()
    filterset_fields = {
        'name': ['exact', 'contains', ],
        'description': ['exact', 'contains', ],
        'start_date': ['exact', 'gt', 'lt', 'gte', 'lte', ],
    }



class AssayWriteView(viewsets.ModelViewSet):
    serializer_class = AssayWriteSerializer
    queryset = Assay.objects.all()

class ExperimentWriteView(viewsets.ModelViewSet):
    serializer_class = ExperimentWriteSerializer
    queryset = Experiment.objects.all()
