from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse, request

from django.conf import settings
from werkzeug.security import generate_password_hash, check_password_hash
from .models import Users
from django.shortcuts import redirect
from django.contrib import auth
from .authenticate_backend import HashedPasswordAuthBackend as checkauth
from main import views as v
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

current_user=None
login_status="None"
username=""
password=""

@api_view(['POST'])
def signup(request):
    global current_user
    data= request.data
    username= data['username']
    name= data['name']
    college= data['college']
    year= data['year']
    branch= data['branch']
    password= data['password']
    cpassword= data['cpassword']
    
    cnf_user= Users.object.get(username= username)

    if(cnf_user):
        Response(['username already taken'])

    if(len(password)<8):
        Response(['Password should be minnimum 8 characters'])
    if(not(password==cpassword)):
        Response(['Confirm password not same '])
    
    user, created = Users.objects.get_or_create(name=name, username= username, college= college, year=year, branch=branch)
    if created:
        user.set_password(password)
        user.save()
        print("Done")
        auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
        current_user=user
        Response(['Done'])
    Response(['None'])


'''def signin(request):
    if request.method == 'POST' :
        username= request.POST.get('username')
        password= request.POST.get('password')
        print(username)
        print(password)
        user= authenticate(username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return HttpResponseRedirect('/profile/')
            
        else:
            return render(request, "login.html")

    return render(request, "login.html")'''
@api_view(['GET','POST'])
def login_page(request):
    global current_user
    global login_status
    global username
    global password
    if(request.method=="GET"):
        if not(current_user==None):
            login_status=('Already Logged in')
        
        return Response(login_status)
            
    if(request.method=="POST"):
    
        data= request.data
        print(data)
        if not(data==[{}]):

            username = data['username']
            password = data['password']
        else:
            username= ""
            password= ""
        p=checkauth()
        
        user = p.authenticate(username=username, password=password)
        current_user=user
        print(user)
        if user:
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            if user.is_authenticated:
                login_status='Done'
                
            else:
                login_status='None'
                
            
            
        else:
            login_status='None'
            
        
        return Response('None')
        
        
        

        





def login_main():
    global current_user
    print(current_user)
    
    return current_user

@api_view(['GET'])
def logout_auth(request):
    global current_user
    if(current_user== None):
        return Response(['Already Logged out'])
    current_user=None
    auth.logout(request)
    return Response(['Logged Out'])