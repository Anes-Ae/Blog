from django.contrib import admin

from .models import Post, Comment

class CommentInline(admin.TabularInline):
    model = Comment
    fields = [
        'display_name',
        'text',
        'status',
        'created_at',
        'updated_at',
    ]

@admin.register(Post)
class BlogAdmin(admin.ModelAdmin):
    model = Post
    list_display = [
        'title',
        'author',
        'status',
        'is_featured',
        'views',
    ]
    list_editable = [
        'status',
        'is_featured'
    ]
    readonly_fields = [
        'created_at',
        'updated_at',
    ]
    list_filter = [
        'status',
        'title',
    ]
    list_max_show_all = 10
    inlines = [
        CommentInline,
    ]

