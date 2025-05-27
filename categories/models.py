from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify, gettext_lazy as _

from taggit.managers import TaggableManager

class Category(models.Model):
    parent = models.ForeignKey('self', on_delete=models.PROTECT, related_name='child')
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True, blank=True)
    description = models.CharField(max_length=350)
    image = models.ImageField(upload_to='category_images/')
    tag = TaggableManager()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('category-detail', args=[self.slug])


    class Meta:
        verbose_name = _('categories')
        verbose_name_plural = _('category')