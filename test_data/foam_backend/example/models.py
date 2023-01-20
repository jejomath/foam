from django.db import models


class CellLine(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)

class Assay(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200, null=True, blank=True)
    cell_line = models.ForeignKey('CellLine', null=True, on_delete=models.SET_NULL)

class Experiment(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    assay = models.ForeignKey('Assay', null=True, on_delete=models.SET_NULL)
    plate_map_file = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200, null=True, blank=True)

