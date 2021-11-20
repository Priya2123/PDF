from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import PDFS
import sys
sys.path.append("..")
from authentication.models import Users

class UserSerializer(ModelSerializer):
    class Meta:
        model = Users

        fields= '__all__'




class PdfsSerializer(ModelSerializer):
    class Meta:
        model = PDFS
        fields = '__all__' 