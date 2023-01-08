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
  - name: edit_experiment
    descr: Edit a record from table experiment
    type: RecordPage
    config:
      source_table: experiment
      edit_fields:
      - name
      - description
      - start_date
      - field: assay
        lookup: find_assay
      - plate_map_file
      - type
      buttons:
      - display: Save
        target: back
        pretarget_fn: (params, data, context) => { context.save() }
      - display: Cancel
        target: back
      - display: Add Platemap
        target: new_platemap
        params_fn: "(params, data) => {{ experiment: data.experiment }}"
```

This config defines a page based on one of the built-in templates (`RecordPage`) that allows the user to edit then
save a single record from a table. The `config` portion is turned into a Javascript object and passed to the `RecordPage`
React component, which interprets it to read the record from the `source_table`, display the editable fields and
add buttons at the bottom. Note that the names in `edit_fields` reference fields in the table config, so they don't need
to re-define the type of each field. The `RecordPage` will automatically use a text input for the name, a date picker
for `start_date`, etc.

The first two buttons in this example both return to the previous page, but the "Save" button first performs custom
Javascript that saves the record. The third button sends the user to a new page to create a platemap for the experiment,
on a page named `new_platemap` that would be defined elsewhere in the overall config. These links open the pages as new URLs, but there's also an option to open the new page in a modal on top of an unchanged original page. Again, note the custom Javascript
that defines the search parameters that will go in the URL when navigating to the page.

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

## Install the React library

(Coming soon...)

# Running the included example

The Foam repo comes with a basic test config that you can use to try it out without having to invest in a custom config.
Once you have the Python and library installed in your current environment, you need to install a couple of things in
your local repo that are intentionally left out of git repo.

install in the React library under
`foam/test_data/foam_ui` using the instructions above. Then you just need to start the backend and frontend.

## Create the Database and Run the backend

By default, Django uses a SQLite database backed by a local file. Because this database includes credentials, it
isn't included in the git repo. So you have to recreate it in your local copy.

From `foam/test_data/foam_backend` run:

```bash
python3 -m manage migrate
```

You'll see a list of messages applying migrations, and you can also check that the `db.sqlite3` file is created
in the `foam_backend` directory. This database is empty, but that's enough to run the server:

```bash
python3 -m manage runserver
```

To verify that it's running, open a web browser and navigate to `http://localhost:8000/api/experiment/`. You should
see a page telling you that the `experiment` table is empty.

You may also want to configure an admin user with the following command:

```bash
python manage.py createsuperuser
```

You can then get to the admin console (while the server is running) at `http://localhost:8000/admin/`. (See the Django
documentation for more details about manging users and admins.)


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


## Update the configuration




# Creating your own Project

(The rest of this is scratch. Actual instructions coming soon...)

## Setting up a Django Repo

Add the following three lines to `INSTALLED_APPS` in `settings.py`:
```
    'corsheaders',
    'rest_framework',
    'django_filters',
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

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}```

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

axios
react-datepicker
react-data-grid
react-router
react-router-dom
