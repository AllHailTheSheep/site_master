from django.shortcuts import render
from django.http import FileResponse


# Create your views here.
def index(request):
    return render(None, 'misc/link_in_bio/link_in_bio.html')


# Imports
from django.template import RequestContext


def handler404(request, template_name="misc/errors/404-500.html"):
    response = render(request, template_name)
    response.status_code = 404
    return response

def handler500(request, template_name="misc/errors/404-500.html"):
    response = render(request, template_name)
    response.status_code = 500
    return response