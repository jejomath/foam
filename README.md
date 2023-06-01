A better ELN won't solve your problems, but a better data platform couldn't hurt.

The FOAM low-code data platform framework allows you to design, validate and build a data management system that fits
your organization's needs better than an out-of-the box solution without the cost of building it from scratch.

# Goals

Our goal is to enable data teams in biotech organizations to:

* Build an integrated, end-to-end data platform that integrates more tightly with your internal processes than a traditional ELN or LIMS.

* Accelerate data science development and operations by ensuring data is collected immediately, consistently and in a form your data teams can use.

* Free up your wet lab and data teams to work at the top of their job descriptions by making mundane data collection tools easier to develop and more intuitive to use.

* Allow internal teams to build custom apps and visualizations that fit into a seamless user experience alongside data management workflows.

* Avoid lock-in and unreasonable per-user license fees by using open source tools that you can manage however you want.

# Design Principles

The Foam framework is designed around two fundamental principles:

## 1. Foam should support modular, multi-page workflows to connect and fill the gaps between more complex, custom apps

To do this, Foam allows developers to seamlessly alternate between two complementary approaches:

1) Use templates for common concepts to enforce consistency and reduce boilerplate.

2) Integrate custom and off-the-shelf components where templates don't make sense.

Many similar frameworks, particularly large, closed-source low-code platforms, focus on the first approach and
address the second need by adding complexity to their templating systems to cover endless corner cases, or inserting
trap-doors that allow developers with very specific knowledge to insert custom behavior.

Foam builds both modes of development into its core design, using templates for the 20% of functionality that enables
80% of use cases, while allowing developers to seamlessly develop and integrate more complex solutions addressing the
final 20%.

## 2 Foam should reduce incidental complexity so developers can focus on fundamental complexity

The problems that you're trying to solve are fundamentally complex, and there's nothing a framework like Foam can do to
change that. What it can do is to minimize the amount of time you have to spend on boring and repetitive work that 
doesn't address these core issues. To do this, Foam follows two key rules:

1) Use low code to make coders more efficient rather than ennabling "citizen programmers".

2) Build off canonical OSS libraries so that developers can use what they already know.

Many similar frameworks are designed to enable users to develop their own applications, taking developers out of the loop.
This is great in theory, but in practice leads to bad high-level design and technical debt. Foam is designed around
how developers like to work. Instead of simplifying development concepts to make them accessible to "citizen programmers"
we ensure that it's compatible with all the development tools that you already know and love.


# How It Works

We'll introduce the main concepts of developing with foam from schemas to workflows. The intended
development workflow is the reverse - starting from user workflows and working towards the underlying schema. But to
understand how the parts fit together, it's easier to start from the bottom.

## Defining the schema and API

The base layer of a Foam project is the schema definition, which defines tables and fields in a backing database as well
as a basic REST-based CRUD API. Following the Principle #1, this consists of a template-based system for covering the most
common 80% of use cases, built so that you can extend it for the 20% of use cases that require completely custom design. Following Principle #2, we use a config file that can be edited in any IDE to generate code that you can deploy using your
favorite CI/CD tools, and base if all on the widely-used open source library Django.

The template system is based around a config file that defines the tables and fields in the database and a matching
API. Here's an example of what this might look like for an Experiments table:

```yaml
  - name: experiment
    descr: A table with one record for each experiment.
    preprocess_new: add_experiment_name
    fields:
    - name: name
      type: STRING
      descr: Name of the experiment
      preprocess_new: name_new_experiment
    - name: description
      type: TEXT
      descr: A long-form description of the experiment
    - name: start_date
      type: DATE
      descr: The day on which the experiment was started
    - name: assay
      type: ref:assay
      descr: The assay used in the experiment
    - name: plate_map_file
      type: doc:plate_map
      descr: The file that the plate map was loaded from
    - name: type
      type: enum:assay_type
      descr: Type of assay
```

From this config file, Foam generates a Django data model, serializers, views and an API router. The serializers and
API endpoints perform basic CRUD operations directly from the database. The config file allows you to make additions and
changes without having to update all four layers (model, serializer, view, endpoint), both to ensure consistency and
speed up mundane development tasks.

Note that the `assay` field is a foreign-key reference to the `assay` table and the `type` field references an enum
that would be defined in another section of the config. Both of these types of fields can be implemented in multiple
ways in Django, but Foam just picks one and uses it consistently across the schema.

We also plan to introduce a config schema for defining custom serializers/views that address common use cases such as
table joins, but the details haven't yet been settled.

To finish the backend, you create a Django project and import the router from the generated Python library. For the 20%
of use cases that require custom logic, there are two ways to add functionality beyond basic CRUD operations: First,
you can add custom pre-processing functions in a python file `custom.py` in the same folder as the generated libraries.
To attach these functions to the API endpoint, you reference the function name from the config, as we've done for the
`name` field above.

The second way to address the 20% custom use cases is to write completely custom data models, serializers, views, and/or
endpoints and import them in your Django app next to the Foam-generated router. This custom code can import any of the
generated models, serializers, etc. or be written completely from scratch.


## Defining pages and links

The user interface layer of Foam follows a similar pattern, using a config file for the most common 80% of use cases,
but giving the developer complete control over the underlying application for the 20% of cases that require custom
development. In this case, we use the common open source library React for the application and allow users to reference
custom React classes from within the config file.

Each page in the config will look something like this:

```yaml
  - name: find_experiment
    descr: Search page for table experiment
    type: Table
    config:
      source: experiment
      view_columns:
      - field: name
        width: 200
      - field: description
        width: 200
      - field: status
        width: 200
      ...
      search_fields:
      - name
      - description
      - status
      - program
      ...
      row_action:
        display: Select Experiment
        target: view_experiment
        params_fn: '({id: data.id})'
    buttons:
    - display: New Experiment
      target: new_experiment
      mode: modal
    - display: Done
      target: back
```

This config defines a page based on one of the built-in templates (`Table`) that displays a list of records and allows
the user to select one. The `config` portion is turned into a Javascript object and passed to the `Table`
React component, which interprets it to read the records from the `source_table`, display the table and
add buttons at the bottom. Note that the names in `view_columns` reference fields in the table config, so they don't need
to re-define the type of each field.

The first button sends the user to a page where they can create a new experiment, while the second sends them back to
whatever page they came from. Button definitions also allow developers to insert custom Javascript that runs when the
button is clicked to do things like save changes or automatically fill in parameters that will be sent to the next page.

When the frontend is running, this page will be available at the endpoint that matches its `name`, as defined in the config.

Foam uses this config file to generate a Javascript file that imports the React page components and links them to URLs
and config objects. To create the frontend server, you create a new React app and import this generated file along with
the Foam React library that handles navigation and provides basic utility functions.

To define a completely custom page, a developer writes a React component, then registers it in the config file so that the
generated code will import it. They can then define a new page in the config with the React component as its type.
The developer has the option of using the config object, as well as leveraging Foam's built in functions for things like
accessing data from the backend, navigating to other pages or even embedding Foam components such as edit fields and tables.


# Installing Foam

## Clone the repo

```bash
git clone git@github.com:jejomath/foam.git
```

## Install the Python library

```bash
cd foam
python3 -m pip install .
```


# Running the included example

The Foam repo comes with a basic test config that you can use to try it out without having to invest in a custom config.
Once you have the Python and library installed in your current environment, you need to install a couple of things in
your local repo that are intentionally left out of git repo.

install in the React library under
`foam/test_data/foam_ui` using the instructions above. Then you just need to start the backend and frontend.

## Create the Database and Run the backend

By default, Django uses a SQLite database backed by a local file. Because this database includes credentials, it
isn't included in the git repo. So you have to recreate it in your local copy. Luckily, there's a script that will
do this for you, including loading test data.

From `foam/test_data/foam_backend` run:

```bash
./reset_db.sh
```

You'll see a list of messages applying migrations and loading data. You can also check that the `db.sqlite3` file is created
in the `foam_backend` directory. Note that the first line in `reset_db.sh` deletes this file if it exists, so rerunning the
scripte will reset all the data in the database.

You can now run the server:

```bash
python3 -m manage runserver
```

To verify that it's running, open a web browser and navigate to `http://localhost:8000/api/experiment/`. You should
see a page telling you that the `experiment` table is empty.

You may also want to configure an admin user with the following command:

```bash
python3 -m manage createsuperuser
```

You can then get to the admin console (while the server is running) at `http://localhost:8000/admin/`. (See the Django
documentation for more details about manging users and admins.)

## Add a user

To create a user who can log in through the frontend, go to `http://localhost:8000/auth/users/` and fill out the form
at the bottom of the page:




## Build and Run the Frontend

To run the frontend, you need to install a number of React libraries that (for obvious reasons) we also left out of the
git repo. You can do this by running the following command from `foam/test_data/foam_ui`:

```bash
npm install .
```

Once that completes and you have the backend running (in a different terminal window), you can start the frontend
as follows:

```bash
npm start
```

This may take a minute or so, then it will open up a new browser tab with the landing page. From there, you should be
able to create, view and edit assays and experiments.


# Modify the example

To get you started building your own system, we'll walk through some small changes to the frontend and backend.
We'll start by adding a `description` field to the `program` table. After we make the change on the backend, we'll
update the UI to incorporate this new field.

## Update the Schema

First, we'll add the field in the schema configuration, which is in the `table_modules` section of
`test_data/programs_schema.yaml`. We'll add it between `name` and `target` like this:

```yaml
    ...
    - name: name
      type: STRING
      descr: Program`s name
    - name: description
      type: TEXT
      descr: A description of the program
    - name: target
      type: ref:protein
      descr: Primary target
    ...
```

Then we need to run the command to update the server code, from the `test_data` directory:

```bash
foam schema-code
```

This updates the Django code, but the changes also require us to update the database. We can have Django do this
by stopping the backend and running the following lines from the `test_data/foam_backend` directory:

```bash
python3 -m manage makemigrations
python3 -m manage migrate
```

Then restart the server for the next step.


## Updating the UI

Because we won't want certain fields to appear in particular pages, we have to explicitly add them to the UI
configuration. Let's start by adding `description` to the `find_program` page by adding it between `name`
and `target` in the file `test_data/programs_pages.yaml` as below:

```yaml
      - field: name
        width: 200
      - field: description
        width: 400
      - field: target
        width: 200
```

Then you'll need to have foam re-generate the code by running the following command from the `test_data` directory:

```bash
foam pages-code
```

If the frontend server is already running, React will notice the changes and automatically reload the page. If not,
you can start it as above. In either case, if you navigate to the `find_program` page by clicking on the Experiment
link on the landing page, you should see the new `description` column in the table.

You'll also need to add this new field in the `edit_program` and `view_program` configs, but we won't walk through
the details here.


## Generating Page Configs

If you think it's a pain to have to update all these pages every time you make a schema change, I have some good news
for you: When you run the `schema-code` command, Foam automatically generates basic page configs in a file called
`gen_pages.yaml` for find, view and edit tables, as well as a landing page linking to all the find* pages. In fact, 
the original `experiments_pages.yaml` file is just a copy of this.

So instead of writing everything from scratch, you can copy and paste parts of configs or entire configs.

# Creating your own Project

(The rest of this is scratch. Actual instructions coming soon...)

## Setting up a Django Repo

Add the following three lines to `INSTALLED_APPS` in `settings.py`:
```
    'corsheaders',
    'rest_framework',
    'django_filters',
    '<your app name>',
    'rest_framework.authtoken',
    'djoser',  # <--- Only if you want to require authentication.
```

Add `'corsheaders.middleware.CorsMiddleware',` to the `MIDDLEWARE` list.

Where `<your app name>` is whatever you named the app where you're putting the FOAM code.

Add the following lines at the botton:

```
CORS_ORIGIN_ALLOW_ALL = False

CORS_ORIGIN_WHITELIST = (
  'http://localhost:3000',
)

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 100,

    # The following lines are only if you want to enable authentication.
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ]
}

# The following lines are only if you want to enable authentication.
DJOSER = {
    "USER_ID_FIELD": "username"
}```

Then update `urls.py` to look like this:

```
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from <your app name> import router
from djoser import urls as durls  # If you want to use authentication

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.router.urls)),
    path('auth/', include(durls)),  # If you want to use authentication
    path('auth/', include('djoser.urls.authtoken')),  # If you want to use authentication
]
```

# Node packages

axios
react-datepicker
react-data-grid
react-router
react-router-dom
react-plotly.js
plotly.js

# Dump database

```bash
python3 -m manage dumpdata |jq > ../test_dump.json
```

Then reload:

```bash
python3 -m manage loaddata ../test_dump.json 
```

# Functions

Every function takes three parameters:
* params - The parameters passed to the page or to the cell.
* data - The canonical data object associated with the page or cell.
* context - Contains other helper functions, and other data objects for cases such as a layout page.

## Actions

### pretargetFn

This function is called before an action takes place. The function should return a pair `(newData, newOtherData)` where
`data` is updated copy of the canonical data object and `newOtherData` is a dictionary, with keys for any other data objects
to update.

### paramsFn

This function returns the parameters that should be passed to the new target. It takes the updated `data` and `allData`
objects defined by the `pretargetFn` if it's defined.



# Tests

CLI Tests: Run `python3 -m pytest` from the `/tests/` directory.
Django API tests: Run `python3 -m manage test` from `/test_data/foam_backend/`
