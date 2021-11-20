from django.contrib import admin
from .models import Users
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class UserAdminConfig(UserAdmin):
    list_display= ('name', 'username', 'college', 'year', 'branch', 'is_staff', 'is_active')
    fieldsets = (
        (None,{'fields':('name', 'username','password')}),
        ("Permissions", {'fields':('is_staff', 'is_active')}),
        ("About", {'fields':('college', 'year', 'branch',)})
    )
    add_fieldsets=(None,{
        'classes': ('wide',),
        'fields': ('name', 'username', 'college', 'year', 'branch','password', 'cpassword', 'is_staff', 'is_active')
    })


admin.site.register(Users, UserAdminConfig)
# Register your models here.
