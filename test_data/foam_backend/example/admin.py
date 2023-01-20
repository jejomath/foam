from django.contrib import admin

from .models import CellLine, Assay, Experiment

admin.site.register(CellLine)
admin.site.register(Assay)
admin.site.register(Experiment)