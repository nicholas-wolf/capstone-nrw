from django.db import models


# Create your models here.


class Place(models.Model):
    place_id = models.CharField(max_length=255)
    
    
    
