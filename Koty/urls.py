from django.urls import path
from . import views

urlpatterns = [
    path('Koty/', views.Koty, name='Koty' )
]