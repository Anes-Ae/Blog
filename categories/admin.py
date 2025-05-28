from django.contrib import admin
from django.utils.html import format_html
from .models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'updated_at')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description')
    list_filter = ('created_at', 'updated_at')
    ordering = ('-created_at', 'title')
    readonly_fields = [
        'created_at', 'updated_at'
    ]



