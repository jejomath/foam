from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from example import views

router = routers.DefaultRouter()

router.register(r'person', views.PersonView)
router.register(r'write_person', views.PersonWriteView)
router.register(r'program', views.ProgramView)
router.register(r'write_program', views.ProgramWriteView)
router.register(r'program_milestone', views.ProgramMilestoneView)
router.register(r'write_program_milestone', views.ProgramMilestoneWriteView)
router.register(r'assay', views.AssayView)
router.register(r'write_assay', views.AssayWriteView)
router.register(r'experiment', views.ExperimentView)
router.register(r'write_experiment', views.ExperimentWriteView)
router.register(r'perturbation', views.PerturbationView)
router.register(r'write_perturbation', views.PerturbationWriteView)
router.register(r'cell_line', views.CellLineView)
router.register(r'write_cell_line', views.CellLineWriteView)
router.register(r'indication', views.IndicationView)
router.register(r'write_indication', views.IndicationWriteView)
router.register(r'species', views.SpeciesView)
router.register(r'write_species', views.SpeciesWriteView)
router.register(r'organ', views.OrganView)
router.register(r'write_organ', views.OrganWriteView)
router.register(r'tissue', views.TissueView)
router.register(r'write_tissue', views.TissueWriteView)
router.register(r'cell_type', views.CellTypeView)
router.register(r'write_cell_type', views.CellTypeWriteView)
router.register(r'protein', views.ProteinView)
router.register(r'write_protein', views.ProteinWriteView)
router.register(r'gene', views.GeneView)
router.register(r'write_gene', views.GeneWriteView)
router.register(r'compound', views.CompoundView)
router.register(r'write_compound', views.CompoundWriteView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]