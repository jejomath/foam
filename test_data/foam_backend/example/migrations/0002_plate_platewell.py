# Generated by Django 4.1 on 2023-04-13 18:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('example', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Plate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('row_count', models.IntegerField(blank=True, null=True)),
                ('column_count', models.IntegerField(blank=True, null=True)),
                ('experiment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='plate', to='example.experiment')),
            ],
        ),
        migrations.CreateModel(
            name='PlateWell',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('row', models.IntegerField(blank=True, null=True)),
                ('column', models.IntegerField(blank=True, null=True)),
                ('purpose', models.CharField(blank=True, max_length=200, null=True)),
                ('perturbation', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='plate_well', to='example.perturbation')),
                ('plate', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='plate_well', to='example.plate')),
            ],
        ),
    ]