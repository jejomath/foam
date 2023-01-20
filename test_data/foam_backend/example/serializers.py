from rest_framework import serializers
from .models import CellLine, Assay, Experiment


class CellLineShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellLine
        fields = ('id', 'name')

class AssayShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('id', 'name')

class ExperimentShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'name')



class CellLineSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CellLine
        fields = ('id', 'name', )

class AssaySerializer(serializers.ModelSerializer):
    
    cell_line = CellLineShortSerializer(read_only=True)
    
    class Meta:
        model = Assay
        fields = ('id', 'name', 'type', 'cell_line', )

class ExperimentSerializer(serializers.ModelSerializer):
    
    assay = AssayShortSerializer(read_only=True)
    
    class Meta:
        model = Experiment
        fields = ('id', 'name', 'description', 'start_date', 'assay', 'plate_map_file', 'type', )



class CellLineWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = CellLine
        fields = ('id', 'name', )

class AssayWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assay
        fields = ('id', 'name', 'type', 'cell_line', )

class ExperimentWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiment
        fields = ('id', 'name', 'description', 'start_date', 'assay', 'plate_map_file', 'type', )
