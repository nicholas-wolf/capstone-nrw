from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Assume that you have installed requests: pip install requests
import requests
import json
from .serializers import NearbyParksSerializer
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def getNearbyParks(request):
        # The url is like https://localhost:8000/api/?results=40
        location = request.GET['location']
        response = {}
        # Make an external api request ( use auth if authentication is required for the external API)
        r = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?key='AIzaSyCdC-vcF7aRlx0-mJh4pBAAx6AJD72UQo4'&location={location}&radius=50000&keyword=Theme Park")

        # If it is a success
        if r.status_code == 200:
            response['status'] = 200
            response['message'] = 'success'
            response['body'] = r.json()
        else:
            response['status'] = r.status_code
            response['message'] = 'error'
            response['credentials'] = {json}
        return Response(response)
