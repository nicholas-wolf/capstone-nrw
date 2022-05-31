from django.db import models
from authentication.models import User
from excursion.models import Excursion


# Create your models here.


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    place = models.ForeignKey(Excursion, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
