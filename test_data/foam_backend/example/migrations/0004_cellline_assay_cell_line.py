# Generated by Django 4.1 on 2023-01-19 21:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0003_experiment_start_date_experiment_type_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CellLine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='assay',
            name='cell_line',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='example.cellline'),
        ),
    ]
