A better ELN won't solve your problems, but your data platform should support a broader solution.

The FOAM framework allows you to design, validate and prototype this solution.

# Overview

## Run the backend

From `foam/test_data/foam_backend` run:

'''
python3 -m manage runserver
'''

## Run the frontend

From `foam/test_data/foam_ui` run:

'''
npm start
'''


# Setting up a Django Repo

Add the following three lines to `INSTALLED_APPS` in `settings.py`:
```
    'corsheaders',
    'rest_framework',
    '<your app name>',
```

Add `'corsheaders.middleware.CorsMiddleware',` to the `MIDDLEWARE` list.

Where `<your app name>` is whatever you named the app where you're putting the FOAM code.

Add the following lines at the botton:

```
CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = (
  'http://localhost:3000',
)
```

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

# Node packages

react-datepicker
react-data-grid
axios
