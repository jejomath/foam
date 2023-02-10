from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from example import router
from djoser import urls as durls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.router.urls)),
    path('auth/', include(durls)),
    path('auth/', include('djoser.urls.authtoken')),
]
