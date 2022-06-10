from django.db import models
from authentication.models import User
from place.models import Place
from datetime import date

# Create your models here.


class Excursion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    date = models.DateField()

