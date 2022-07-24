from django.contrib import admin
from .models.personalinfo import PersonalInfo
from .models.qualificationdetails import QualificationDetails
from .models.bankinginfo import BankingInfo
from .models.reportingarea import ReportingArea
from .models.timeavailability import TimeAvailability
from .models.instpersonalinfo import InstPersonalInfo
from .models.institutionmodalities import InstitutionModalities
from .models.workexp import WorkExp

admin.site.register(PersonalInfo)
admin.site.register(WorkExp)
admin.site.register(QualificationDetails)
admin.site.register(BankingInfo)
admin.site.register(ReportingArea)
admin.site.register(TimeAvailability)
admin.site.register(InstPersonalInfo)
admin.site.register(InstitutionModalities)

# Register your models here.
