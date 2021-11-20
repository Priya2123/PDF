from __future__ import unicode_literals
from django.db import models
import sys
sys.path.append("..")
from authentication.models import Users

class PDFS(models.Model):
	
    user= models.ForeignKey(Users, on_delete=models.CASCADE)
    pdf = models.BinaryField()
    description= models.TextField(max_length=200)
    branch = models.CharField(max_length=20)
    college = models.CharField(max_length=50)
    year = models.IntegerField()
    date= models.DateField(auto_now_add=True)
    upvote = models.IntegerField(default=0)
    downvote= models.IntegerField(default=0)
    name = models.CharField(max_length=100)
