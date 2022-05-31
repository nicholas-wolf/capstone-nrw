from django.db import models


# Create your models here.


class Place(models.Model):
    maps_url = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    
