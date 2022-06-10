from django.urls import path
from excursion import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.create_excursion),
    path('<str:place_id>', views.get_excursions),
]