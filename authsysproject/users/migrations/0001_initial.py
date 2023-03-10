# Generated by Django 4.0.5 on 2022-07-13 12:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BankingInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bankname', models.CharField(max_length=25)),
                ('acnumber', models.CharField(max_length=15)),
                ('ifsc', models.CharField(max_length=15)),
                ('pancardno', models.CharField(max_length=15)),
                ('pandcard', models.FileField(upload_to='uploads/')),
                ('cheque', models.FileField(upload_to='uploads/')),
                ('pictureproof', models.FileField(upload_to='uploads/')),
            ],
        ),
        migrations.CreateModel(
            name='InstitutionModalities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mriopt1', models.CharField(max_length=100)),
                ('mriothers1', models.CharField(max_length=100)),
                ('ctopt1', models.CharField(max_length=100)),
                ('ctothers1', models.CharField(max_length=100)),
                ('xray1', models.BooleanField()),
                ('others1', models.BooleanField()),
                ('rdoprefrence', models.CharField(max_length=15)),
                ('exnocase', models.IntegerField()),
                ('urgent', models.CharField(max_length=30)),
                ('nonurgent', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='QualificationDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tensname', models.CharField(max_length=30)),
                ('tengrade', models.CharField(max_length=10)),
                ('tenpsyr', models.CharField(max_length=15)),
                ('tencertificate', models.FileField(upload_to='uploads/')),
                ('twelvesname', models.CharField(max_length=30)),
                ('twelvegrade', models.CharField(max_length=10)),
                ('twelvepsyr', models.CharField(max_length=15)),
                ('twelvecertificate', models.FileField(upload_to='uploads/')),
                ('mbbsinstitution', models.CharField(max_length=25)),
                ('mbbsgrade', models.CharField(max_length=10)),
                ('mbbspsyr', models.CharField(max_length=10)),
                ('mbbsmarksheet', models.FileField(upload_to='uploads/')),
                ('mbbsdegree', models.FileField(upload_to='uploads/')),
                ('mdinstitution', models.CharField(max_length=25)),
                ('mdgrade', models.CharField(max_length=10)),
                ('mdpsyr', models.CharField(max_length=10)),
                ('mddegree', models.FileField(upload_to='uploads/')),
            ],
        ),
        migrations.CreateModel(
            name='ReportingArea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mriopt', models.CharField(max_length=100)),
                ('mriothers', models.CharField(max_length=100)),
                ('ctopt', models.CharField(max_length=100)),
                ('ctothers', models.CharField(max_length=100)),
                ('xray', models.BooleanField()),
                ('others', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='TimeAvailability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('monday', models.BooleanField()),
                ('tuesday', models.BooleanField()),
                ('wednesday', models.BooleanField()),
                ('thursday', models.BooleanField()),
                ('friday', models.BooleanField()),
                ('saturday', models.BooleanField()),
                ('sunday', models.BooleanField()),
                ('monst', models.CharField(default='Individual', max_length=255)),
                ('monend', models.CharField(default='Individual', max_length=255)),
                ('tuest', models.CharField(default='Individual', max_length=255)),
                ('tueend', models.CharField(default='Individual', max_length=255)),
                ('wedst', models.CharField(default='Individual', max_length=255)),
                ('wedend', models.CharField(default='Individual', max_length=255)),
                ('thust', models.CharField(default='Individual', max_length=255)),
                ('thuend', models.CharField(default='Individual', max_length=255)),
                ('frist', models.CharField(default='Individual', max_length=255)),
                ('friend', models.CharField(default='Individual', max_length=255)),
                ('satst', models.CharField(default='Individual', max_length=255)),
                ('satend', models.CharField(default='Individual', max_length=255)),
                ('sunst', models.CharField(default='Individual', max_length=255)),
                ('sunend', models.CharField(default='Individual', max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='WorkExp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exinstitution', models.CharField(max_length=30)),
                ('exstdate', models.DateField()),
                ('exenddate', models.DateField()),
                ('designation', models.CharField(max_length=15)),
                ('exinstitution1', models.CharField(max_length=30)),
                ('exstdate1', models.DateField()),
                ('exenddate1', models.DateField()),
                ('designation1', models.CharField(max_length=15)),
                ('prexst', models.DateField()),
                ('prexend', models.DateField()),
                ('pii', models.CharField(max_length=15)),
                ('msname', models.CharField(max_length=15)),
                ('mcirgno', models.CharField(max_length=15)),
                ('regcecr', models.FileField(upload_to='uploads/')),
            ],
        ),
        migrations.CreateModel(
            name='PersonalInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cnfpassword', models.CharField(max_length=12)),
                ('phone', models.CharField(max_length=10)),
                ('altphone', models.CharField(max_length=10)),
                ('reference', models.CharField(max_length=50)),
                ('resume', models.FileField(upload_to='uploads/')),
                ('uploadpicture', models.FileField(upload_to='uploads/')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='InstPersonalInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instadd', models.CharField(max_length=100)),
                ('cnprname', models.CharField(max_length=30)),
                ('cnprdesignation', models.CharField(max_length=25)),
                ('cnprphone', models.CharField(max_length=10)),
                ('altcnprname', models.CharField(max_length=30)),
                ('altcnprdesignation', models.CharField(max_length=25)),
                ('altcnprphone', models.CharField(max_length=10)),
                ('emailfraccount', models.EmailField(max_length=50)),
                ('accountcnpr', models.CharField(max_length=15)),
                ('acccnprphone', models.CharField(max_length=10)),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
