from django.contrib import admin

from .models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = [
        'title',
        'created_at',
        'updated_at',
    ]
    list_display_links = [
        'title',
                          ]
    search_fields = [
        'title',
        'description',
    ]
    list_filter = [
        'created_at',
        'updated_at',
    ]
    ordering = [
        '-created_at',
        'title',
    ]
    readonly_fields = [
        'created_at',
        'updated_at'
    ]
    list_max_show_all = 10
