from django.urls import path

from . import views



urlpatterns = [
    path('', views.PostListView.as_view(), name='home'),
    path('posts/', views.PostListView.as_view(), name='posts-list'),
    path('posts/<str:slug>/', views.PostDetailView.as_view(), name='post-detail'),
]