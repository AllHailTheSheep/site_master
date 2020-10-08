from django.db import models
from django.contrib import admin


# Create your models here.
class Link(models.Model):
    title = models.CharField(max_length=100)
    alt = models.CharField(max_length=100)
    dest = models.CharField(max_length=100)
    image = models.FilePathField(path='static/misc/link_in_bio/img/')
    def __str__(self):
        title = self.title + ' Link'
        return self.title
    class Meta:
        ordering = ('title', )

admin.site.register(Link)