from django.db import models

# Create your models here.
class Kot(models.Model):
    imieKota = models.CharField(max_length=255)
    rasaKota = models.CharField(max_length=255)

class Czlonek(models.Model):
    imie = models.CharField(max_length=255)
    nazwisko = models.CharField(max_length=255)
    telefon = models.IntegerField(null=True)
    joined_date = models.DateField(null=True)
