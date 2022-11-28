from django.contrib.auth.models import User
from django.db import models


class PersonalInfo(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    cnfpassword = models.CharField(max_length=12, null=True, default=None, blank=True)
    phone = models.CharField(max_length=10, null=True, default=None)
    altphone = models.CharField(max_length=10, null=True, default=None, blank=True)
    reference = models.CharField(max_length=50, null=True, default=None, blank=True)
    resume = models.FileField(upload_to='uploads/', null=True, default=None, blank=True)
    uploadpicture = models.FileField(upload_to='uploads/', null=True, default=None, blank=True)
    signature = models.FileField(upload_to='media', null=True, default=None)
    companylogo = models.FileField(upload_to='media', null=True, default=None)
