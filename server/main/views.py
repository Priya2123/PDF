from django.shortcuts import render
from django.http import HttpResponse, request
from django.contrib.auth import logout, login
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib import auth
from authentication import views as v
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PdfsSerializer, UserSerializer
from .models import PDFS
import sys
sys.path.append("..")
from authentication.models import Users

@api_view(['GET'])
def home(request):
    
    user=v.login_main()
    if not(user==None):
        if not(user.is_authenticated):
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            print(request.user)
    else:
        #return redirect('/login/')
        return Response('Not logged in')
        pass
    #return render(request, 'home.html',{"user":user})
    user_api = Users.objects.get(username=user)
    serializer = UserSerializer(user_api, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def upload(request):
    user=v.login_main()
    if not(user==None):
        if not(user.is_authenticated):
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            print(request.user)
    else:
        #return redirect('/login/')
        return Response('Not logged in')
        pass
    #return render(request, 'upload.html',{"user":user})


@api_view(['GET'])
def download(request):
    user=v.login_main()
    if not(user==None):
        if not(user.is_authenticated):
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            print(request.user)
    else:
        return Response('Not logged in')
        pass
    #return render(request, 'home.html',{"user":user})
    pdf_api = PDFS.objects.all()
    print(pdf_api)
    if not(pdf_api):
        return Response('Nothing to show')
    serializer = PdfsSerializer(pdf_api, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def about(request):
    user=v.login_main()
    if not(user==None):
        if not(user.is_authenticated):
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            print(request.user)
    else:
        #return redirect('/login/')
        return Response('Not logged in')
        pass
    #return render(request, 'about.html',{"user":user})
    return Response('Okay')


@api_view(['GET'])
def profile(request):
    user=v.login_main()
    if not(user==None):
        if not(user.is_authenticated):
            auth.login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            print(request.user)
    else:
        #return redirect('/login/')
        return Response('None')
        pass
    #return render(request, 'home.html',{"user":user})
    user_api = Users.objects.get(username=user)
    serializer = UserSerializer(user_api, many=False)
    return Response(serializer.data)



@api_view(['GET'])
def signout(request):
    auth.logout(request)
    #return redirect('/authlogout/')
    #return render(request, 'home.html', user)

