from rest_framework import serializers
from .models import Excursion



class ExcursionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Excursion
        fields = ['id', 'user','place','text', 'date']
        depth = 1