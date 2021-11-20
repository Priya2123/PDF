from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class CustomAccountManager(BaseUserManager):
    def create_superuser(self, username, name, college, year, branch, password, **other_fields):
        other_fields.setdefault('is_staff',True)
        other_fields.setdefault('is_active',True)
        other_fields.setdefault('is_superuser',True)
        if(other_fields.get('is_staff') is not True):
            raise(ValueError('must be assigned to is staff True'))
        if(other_fields.get('is_superuser') is not True):
            raise(ValueError('must be assigned to is superuser True'))

        return self.create_user(username, name, college, year, branch, password, **other_fields)


    def create_user(self, username, name, college, year, branch, password, **other_fields):
        user = self.model(username= username, name= name, college= college, year= year, branch= branch, **other_fields)
        user.set_password(password)
        user.save()
        return user


class Users(AbstractBaseUser, PermissionsMixin):
    username= models.CharField(unique=True, max_length=100)
    name = models.CharField(max_length=100)
    college = models.CharField(max_length=100, default='None')
    year = models.IntegerField(default=0)
    branch = models.CharField(max_length=100, default='None')
    password= models.CharField(max_length=500, default='admin@123')
    is_staff= models.BooleanField(default=False)
    is_active= models.BooleanField(default=False)


    objects = CustomAccountManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = [ 'name', 'college', 'year', 'branch']
# Create your models here.
