from rest_framework import serializers
from .models import Excursion



class ExcursionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Excursion
        fields = ['id', 'user','place_id','text', 'date']
        depth = 1