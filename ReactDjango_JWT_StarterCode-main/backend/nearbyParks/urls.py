from django.urls import path
from nearbyParks import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.getNearbyParks),
    path('<str:location>', views.getNearbyParks),
]