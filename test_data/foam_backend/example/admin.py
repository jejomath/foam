from django.contrib import admin

from .models import Assay, Experiment

admin.site.register(Assay)
admin.site.register(Experiment)