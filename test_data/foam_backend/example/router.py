from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from example import views

router = routers.DefaultRouter()

router.register(r'assay', views.AssayView)
router.register(r'write_assay', views.AssayWriteView)
router.register(r'experiment', views.ExperimentView)
router.register(r'write_experiment', views.ExperimentWriteView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]