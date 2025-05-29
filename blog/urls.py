from django.urls import path

from . import views



urlpatterns = [
    path('', views.PostListView.as_view(), name='home'),
    path('all-posts/', views.PostListView.as_view(), name='posts-list'),
]