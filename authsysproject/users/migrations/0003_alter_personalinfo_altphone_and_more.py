# Generated by Django 4.0.5 on 2022-09-05 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_personalinfo_signature'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personalinfo',
            name='altphone',
            field=models.CharField(default=None, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='cnfpassword',
            field=models.CharField(default=None, max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='phone',
            field=models.CharField(default=None, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='reference',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='resume',
            field=models.FileField(default=None, null=True, upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='personalinfo',
            name='uploadpicture',
            field=models.FileField(default=None, null=True, upload_to='uploads/'),
        ),
    ]
