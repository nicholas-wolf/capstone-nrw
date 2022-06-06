from django.db import models


# Create your models here.


class NearbyParks(models.Model):
    location = models.CharField(max_length=255)
    