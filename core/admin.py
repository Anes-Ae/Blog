from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
from .forms import CustomUserCreationForm, CustomUserChangeForm

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser

    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields':('email', )}),
    )
    fieldsets = UserAdmin.fieldsets
