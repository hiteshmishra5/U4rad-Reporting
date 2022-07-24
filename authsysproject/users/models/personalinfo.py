from django.contrib.auth.models import User
from django.db import models


class PersonalInfo(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    cnfpassword = models.CharField(max_length=12)
    phone = models.CharField(max_length=10)
    altphone = models.CharField(max_length=10)
    reference = models.CharField(max_length=50)
    resume = models.FileField(upload_to='uploads/')
    uploadpicture = models.FileField(upload_to='uploads/')
