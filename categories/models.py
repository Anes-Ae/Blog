from django.db import models
from django.shortcuts import reverse
from django.utils.text import gettext_lazy as _, slugify


class Tag(models.Model):
    name = models.CharField(max_length=100)


class Category(models.Model):
    parent = models.ForeignKey('self', on_delete=models.PROTECT, null=True, blank=True, related_name='child')
    title = models.CharField(_('title'), max_length=150)
    slug = models.SlugField(_('slug'), unique=True, blank=True, help_text=_(
        "It is preferable to leave this field blank so that it will be filled in automatically."
    ))
    description = models.CharField(_('description'), max_length=350)
    image = models.ImageField(_('image'), upload_to='category_images/', blank=True, null=True)
    tag = models.ManyToManyField(Tag, related_name='categories')
    created_at = models.DateTimeField(_('created at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated at'), auto_now=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('category-detail', args=[self.slug])

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self.title.replace(' ', '-')
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')