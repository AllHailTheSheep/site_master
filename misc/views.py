from django.shortcuts import render
from django.http import FileResponse


# Create your views here.
def index(request):
    return render(None, 'misc/link_in_bio/link_in_bio.html')
