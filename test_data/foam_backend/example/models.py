from django.db import models


class Assay(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=200)

class Experiment(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    assay = models.ForeignKey('Assay', null=True, on_delete=models.SET_NULL)
    plate_map_file = models.CharField(max_length=200, null=True, blank=True)

