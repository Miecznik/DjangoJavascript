from django.urls import path
from . import views

urlpatterns = [
    path('Koty/', views.Koty, name='Koty' ),
    path('Czlonkowie/', views.Czlonkowie, name='Czlonkowie'),
    path('', views.main, name='main'),


]
