from django.contrib import admin

from .models import Post, Comment

class CommentInline(admin.TabularInline):
    model = Comment
    fields = [
        'display_name',
        'text',
        'status',
    ]
    min_num = 0
    extra = 1

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
    prepopulated_fields = {'slug': ('title',)}

    inlines = [
        CommentInline,
    ]

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    model = Comment
    list_display = [
        'post',
        'display_name',
        'text',
        'status',
    ]
    readonly_fields = [
        'created_at',
        'updated_at',
    ]
    list_editable = [
        'status',
    ]
