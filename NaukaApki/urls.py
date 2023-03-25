from django.urls import path
from . import views


urlpatterns = [
    path('NaukaApki/', views.NaukaApki, name='NaukaApki'),
]