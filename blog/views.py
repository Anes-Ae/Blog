from django.views import generic
from django.shortcuts import get_object_or_404

from .models import Post

class HomePostListView(generic.ListView):
    template_name = 'blog/home.html'
    context_object_name = 'post_list'

    def get_queryset(self):
        return Post.objects.filter(is_featured=True).all()


class PostListView(generic.ListView):
    model = Post
    template_name = 'blog/post_list.html'
    context_object_name = 'post_list'


class PostDetailView(generic.DetailView):
    template_name = 'blog/single_post.html'
    context_object_name = 'post'

    def get_object(self, queryset=None):
        return get_object_or_404(Post, slug=self.kwargs['slug'])
