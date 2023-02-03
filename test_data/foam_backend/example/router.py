from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from example import views

router = routers.DefaultRouter()

router.register(r'person', views.PersonView)
router.register(r'write_person', views.PersonWriteView)
router.register(r'person_stats', views.PersonStatsView)
router.register(r'program', views.ProgramView)
router.register(r'write_program', views.ProgramWriteView)
router.register(r'program_stats', views.ProgramStatsView)
router.register(r'program_milestone', views.ProgramMilestoneView)
router.register(r'write_program_milestone', views.ProgramMilestoneWriteView)
router.register(r'program_milestone_stats', views.ProgramMilestoneStatsView)
router.register(r'assay', views.AssayView)
router.register(r'write_assay', views.AssayWriteView)
router.register(r'assay_stats', views.AssayStatsView)
router.register(r'experiment', views.ExperimentView)
router.register(r'write_experiment', views.ExperimentWriteView)
router.register(r'experiment_stats', views.ExperimentStatsView)
router.register(r'perturbation', views.PerturbationView)
router.register(r'write_perturbation', views.PerturbationWriteView)
router.register(r'perturbation_stats', views.PerturbationStatsView)
router.register(r'cell_line', views.CellLineView)
router.register(r'write_cell_line', views.CellLineWriteView)
router.register(r'cell_line_stats', views.CellLineStatsView)
router.register(r'indication', views.IndicationView)
router.register(r'write_indication', views.IndicationWriteView)
router.register(r'indication_stats', views.IndicationStatsView)
router.register(r'species', views.SpeciesView)
router.register(r'write_species', views.SpeciesWriteView)
router.register(r'species_stats', views.SpeciesStatsView)
router.register(r'organ', views.OrganView)
router.register(r'write_organ', views.OrganWriteView)
router.register(r'organ_stats', views.OrganStatsView)
router.register(r'tissue', views.TissueView)
router.register(r'write_tissue', views.TissueWriteView)
router.register(r'tissue_stats', views.TissueStatsView)
router.register(r'cell_type', views.CellTypeView)
router.register(r'write_cell_type', views.CellTypeWriteView)
router.register(r'cell_type_stats', views.CellTypeStatsView)
router.register(r'protein', views.ProteinView)
router.register(r'write_protein', views.ProteinWriteView)
router.register(r'protein_stats', views.ProteinStatsView)
router.register(r'gene', views.GeneView)
router.register(r'write_gene', views.GeneWriteView)
router.register(r'gene_stats', views.GeneStatsView)
router.register(r'compound', views.CompoundView)
router.register(r'write_compound', views.CompoundWriteView)
router.register(r'compound_stats', views.CompoundStatsView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]