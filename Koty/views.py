from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Czlonek
# Create your views here.

def Koty(request):
    template = loader.get_template('Koty.html')
    czlonkowie = Czlonek.objects.all().values()
    context = {
        'czlonkowie': czlonkowie,
    }
    return HttpResponse(template.render(context, request))

def Czlonkowie(request):
    template = loader.get_template('Koty.html')
    czlonkowie = Czlonek.objects.all().values()
    context = {
        'czlonkowie' : czlonkowie,
    }
    return HttpResponse(template.render(context, request))

def main(request):
    template = loader.get_template('main.html')
    return HttpResponse( template.render({}, request))

def details(request, id):
    czlonek = Czlonek.objects.get(id=id)
    template = loader.get_template('details.html')
    context = {
        'czlonek' : czlonek,
    }
    return HttpResponse(template.render(context, request))