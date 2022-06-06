from rest_framework import serializers
from .models import NearbyParks



class NearbyParksSerializer(serializers.ModelSerializer):

    class Meta:
        model = NearbyParks
        fields = ['id', 'location']
        depth = 1