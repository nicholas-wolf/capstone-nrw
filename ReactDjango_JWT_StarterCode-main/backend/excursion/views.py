from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Excursion
from .serializers import ExcursionSerializer
from django.core.exceptions import ObjectDoesNotExist


# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<



@api_view(['GET'])
@permission_classes([AllowAny])
def get_excursions(request, place_id):
    try:
        comments = Excursion.objects.filter(place_id=place_id)
    except ObjectDoesNotExist:
        return Response({"error": "No excursions exist with that placeId"})

    serializer = ExcursionSerializer(comments, many=True)
    return Response(serializer.data)


# POST new comment (protected)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_excursion(request):
    print(request.data)
    serializer = ExcursionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)