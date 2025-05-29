from django.shortcuts import render
from django.views import generic

from .models import Post

class HomePostListView(generic.ListView):
    model = Post
    template_name = 'blog/home.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        return Post.object.filter(is_featured=True).all()


class PostListView(generic.ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'post_list'