from django.contrib import admin

from .models import Person, Program, ProgramMilestone

from .models import Assay, Experiment, Perturbation, Plate, PlateWell

from .models import CellLine

from .models import Indication, Species, Organ, Tissue, CellType, Protein, Gene, Compound


admin.site.register(Person)
admin.site.register(Program)
admin.site.register(ProgramMilestone)
admin.site.register(Assay)
admin.site.register(Experiment)
admin.site.register(Perturbation)
admin.site.register(Plate)
admin.site.register(PlateWell)
admin.site.register(CellLine)
admin.site.register(Indication)
admin.site.register(Species)
admin.site.register(Organ)
admin.site.register(Tissue)
admin.site.register(CellType)
admin.site.register(Protein)
admin.site.register(Gene)
admin.site.register(Compound)