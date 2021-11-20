from django.urls import path

from . import views


urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_page, name='login'),
    path('authlogout/', views.logout_auth, name='logout')
    
]