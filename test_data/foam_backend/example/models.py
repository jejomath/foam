from django.db import models
from .custom import *


class Person(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    given_name = models.CharField(max_length=200, null=True, blank=True)
    family_name = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name
    

class Program(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    target = models.ForeignKey('Protein', related_name='program', null=True, on_delete=models.SET_NULL)
    indication = models.ForeignKey('Indication', related_name='program', null=True, on_delete=models.SET_NULL)
    status = models.CharField(max_length=200, null=True, blank=True)
    started_date = models.DateField(null=True, blank=True)
    stage = models.CharField(max_length=200, null=True, blank=True)
    bio_lead = models.ForeignKey('Person', related_name='program_bio_lead', null=True, on_delete=models.SET_NULL)
    chem_lead = models.ForeignKey('Person', related_name='program_chem_lead', null=True, on_delete=models.SET_NULL)
    program_manager = models.ForeignKey('Person', related_name='program_manager', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class ProgramMilestone(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    program = models.ForeignKey('Program', related_name='program_milestone', null=True, on_delete=models.SET_NULL)
    status = models.CharField(max_length=200, null=True, blank=True)
    target_date = models.DateField(null=True, blank=True)
    completed_date = models.DateField(null=True, blank=True)
    def __str__(self):
        return self.name
    

class Assay(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200, null=True, blank=True)
    descr = models.TextField(null=True, blank=True)
    cell_line = models.ForeignKey('CellLine', related_name='assay', null=True, on_delete=models.SET_NULL)
    for_program = models.ForeignKey('Program', related_name='assay', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Experiment(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    status = models.CharField(max_length=200, null=True, blank=True)
    program = models.ForeignKey('Program', related_name='experiment', null=True, on_delete=models.SET_NULL)
    bio_lead = models.ForeignKey('Person', related_name='experiment_bio_lead', null=True, on_delete=models.SET_NULL)
    target_start_date = models.DateField(null=True, blank=True)
    target_duration = models.IntegerField(null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    assay = models.ForeignKey('Assay', related_name='experiment', null=True, on_delete=models.SET_NULL)
    type = models.CharField(max_length=200, null=True, blank=True)
    perturbations = models.ForeignKey('Perturbation', related_name='experiment', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        preprocess_experiment(self, Experiment)
        super().save(*args, **kwargs)
    

class Perturbation(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    compound = models.ForeignKey('Compound', related_name='perturbation', null=True, on_delete=models.SET_NULL)
    concentration_nm = models.IntegerField(null=True, blank=True)
    def __str__(self):
        return self.name
    

class Plate(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    experiment = models.ForeignKey('Experiment', related_name='plate', null=True, on_delete=models.SET_NULL)
    row_count = models.IntegerField(null=True, blank=True)
    column_count = models.IntegerField(null=True, blank=True)
    def __str__(self):
        return self.name
    

class PlateWell(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    plate = models.ForeignKey('Plate', related_name='plate_well', null=True, on_delete=models.SET_NULL)
    row = models.IntegerField(null=True, blank=True)
    column = models.IntegerField(null=True, blank=True)
    purpose = models.CharField(max_length=200, null=True, blank=True)
    perturbation = models.ForeignKey('Perturbation', related_name='plate_well', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class CellLine(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    species = models.ForeignKey('Species', related_name='cell_line', null=True, on_delete=models.SET_NULL)
    organ = models.ForeignKey('Organ', related_name='cell_line', null=True, on_delete=models.SET_NULL)
    tissue = models.ForeignKey('Tissue', related_name='cell_line', null=True, on_delete=models.SET_NULL)
    cell_type = models.ForeignKey('CellType', related_name='cell_line', null=True, on_delete=models.SET_NULL)
    donor_sex = models.CharField(max_length=200, null=True, blank=True)
    donor_age = models.IntegerField(null=True, blank=True)
    donor_ethnicity = models.CharField(max_length=200, null=True, blank=True)
    donor_health_status = models.CharField(max_length=200, null=True, blank=True)
    disease = models.ForeignKey('Indication', related_name='cell_line', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Indication(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name
    

class Species(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name
    

class Organ(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    species = models.ForeignKey('Species', related_name='organ', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Tissue(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    species = models.ForeignKey('Species', related_name='tissue', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class CellType(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    species = models.ForeignKey('Species', related_name='cell_type', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Protein(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    gene = models.ForeignKey('Gene', related_name='protein', null=True, on_delete=models.SET_NULL)
    species = models.ForeignKey('Species', related_name='protein', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Gene(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    species = models.ForeignKey('Species', related_name='gene', null=True, on_delete=models.SET_NULL)
    def __str__(self):
        return self.name
    

class Compound(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    smiles = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name
    
