from django.db import models


class TimeAvailability(models.Model):
    monday = models.BooleanField()
    tuesday = models.BooleanField()
    wednesday = models.BooleanField()
    thursday = models.BooleanField()
    friday = models.BooleanField()
    saturday = models.BooleanField()
    sunday = models.BooleanField()
    monst = models.CharField(max_length=255, default="Individual")
    monend = models.CharField(max_length=255, default="Individual")
    tuest = models.CharField(max_length=255, default="Individual")
    tueend = models.CharField(max_length=255, default="Individual")
    wedst = models.CharField(max_length=255, default="Individual")
    wedend = models.CharField(max_length=255, default="Individual")
    thust = models.CharField(max_length=255, default="Individual")
    thuend = models.CharField(max_length=255, default="Individual")
    frist = models.CharField(max_length=255, default="Individual")
    friend = models.CharField(max_length=255, default="Individual")
    satst = models.CharField(max_length=255, default="Individual")
    satend = models.CharField(max_length=255, default="Individual")
    sunst = models.CharField(max_length=255, default="Individual")
    sunend = models.CharField(max_length=255, default="Individual")