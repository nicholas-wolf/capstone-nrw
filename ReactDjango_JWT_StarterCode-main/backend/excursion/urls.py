from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_excursions),
    path('all/<str:pk>/', views.get_all_excursions),
    path('update/<int:pk>/', views.edit_excursion),
    path('post/', views.user_excursion)
]