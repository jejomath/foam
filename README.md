A better ELN won't solve your problems, but your data platform should support a broader solution.

The FOAM framework allows you to design, validate and prototype this solution.

# Overview
...

# Setting up a Django Repo

Add the following three lines to `INSTALLED_APPS` in `settings.py`:
```
    'corsheaders',
    'rest_framework',
    '<your app name>',
```
Where `<your app name>` is whatever you named the app where you're putting the FOAM code.

Then update `urls.py` to look like this:

```
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from <your app name> import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.router.urls)),
]
```
