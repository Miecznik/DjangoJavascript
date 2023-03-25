from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def Koty(request):
    template = loader.get_template('Koty.html')
    return HttpResponse(template.render())