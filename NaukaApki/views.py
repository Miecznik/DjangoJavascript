from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def NaukaApki(request):
    template = loader.get_template('Koty.html')
    return HttpResponse(template.render())

# Create your views here.
