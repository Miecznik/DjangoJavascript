from django.db import models

# Create your models here.
class Kot(models.Model):
    imieKota = models.CharField(max_length=255)
    rasaKota = models.CharField(max_length=255)git add