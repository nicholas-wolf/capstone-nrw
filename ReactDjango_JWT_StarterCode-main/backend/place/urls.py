from django.urls import path
from . import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_all_places),
    path('all/<str:pk>/', views.get_all_places),
    path('update/<int:pk>/', views.edit_place),
    path('post/', views.user_place)
]