from django.db import models


class WorkExp(models.Model):
    exinstitution = models.CharField(max_length=30)
    exstdate = models.DateField()
    exenddate = models.DateField()
    designation = models.CharField(max_length=15)
    exinstitution1 = models.CharField(max_length=30)
    exstdate1 = models.DateField()
    exenddate1 = models.DateField()
    designation1 = models.CharField(max_length=15)
    prexst = models.DateField()
    prexend = models.DateField()
    pii = models.CharField(max_length=15)
    msname = models.CharField(max_length=15)
    mcirgno = models.CharField(max_length=15)
    regcecr = models.FileField(upload_to='uploads/')
