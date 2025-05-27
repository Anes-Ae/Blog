from django.db import models
from django.utils.text import slugify, gettext_lazy as _
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.shortcuts import reverse

from tinymce.models import HTMLField
from taggit.managers import TaggableManager

class Post(models.Model):
    POST_STATUS_PUBLISHED = 'pub'
    POST_STATUS_DRAFT = 'drf'
    POST_STATUS_SCHEDULED = 'SCD'

    POST_STATUS_CHOICES = (
        (POST_STATUS_PUBLISHED, 'published'),
        (POST_STATUS_SCHEDULED, 'scheduled'),
        (POST_STATUS_DRAFT, 'draft'),
    )

    title = models.CharField(_('title'), max_length=150)
    slug = models.SlugField(_('slug'), unique=True, blank=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.PROTECT, related_name='posts', verbose_name=_('author'))
    featured_image = models.ImageField(_('featured image'), upload_to='blog images/', null=True, blank=True)
    main_content = HTMLField(_('main content'))
    status = models.CharField(_('status'), max_length=3, choices=POST_STATUS_CHOICES)
    publish = models.DateTimeField(default=timezone.now)
    Categories = models.ManyToManyField('categories.Category', related_name='posts', verbose_name=_('categories'))
    tags = TaggableManager(_('tags'))
    views = models.PositiveIntegerField(_('views'), default=0)
    is_featured = models.BooleanField(_('is featured'), default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'title: {self.title} author: {self.author}'

    def get_absolute_url(self):
        return reverse('post-detail', args=[self.slug])

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def is_visible(self):
        return (
                (self.status == 'published') or
                (self.status == 'scheduled' and self.publish <= timezone.now())
        )
    class Meta:
        verbose_name = _('blog posts')
        verbose_name_plural = _('post')