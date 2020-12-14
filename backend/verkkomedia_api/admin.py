from django.contrib import admin
from verkkomedia_api import models

admin.site.register(models.UserProfile)
admin.site.register(models.News)
admin.site.register(models.Review)
