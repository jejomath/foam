from rest_framework import serializers
from .models import Assay, Experiment


class AssayShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('id', 'name')

class ExperimentShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'name')



class AssaySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Assay
        fields = ('name', 'type', )

class ExperimentSerializer(serializers.ModelSerializer):
    
    assay = AssayShortSerializer(read_only=True)
    
    class Meta:
        model = Experiment
        fields = ('name', 'description', 'assay', 'plate_map_file', )



class AssayWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('name', 'type', )

class ExperimentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('name', 'description', 'assay', 'plate_map_file', )
