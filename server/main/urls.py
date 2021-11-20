from django.urls import path

from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('upload/', views.upload, name='upload'),
    path('download/', views.download, name='download'),
    path('about/', views.about, name='about'),
    path('profile/', views.profile, name='profile'),
    path('logout/', views.signout, name='signout'),
    
]