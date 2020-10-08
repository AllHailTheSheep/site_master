from django.shortcuts import render
from django.http import FileResponse
from misc.models import Link

# Create your views here.
def index(request, template_name="misc/link_in_bio/link_in_bio.html"):
    context = {
        'links': Link.objects.all()
    }
    return render(request, template_name, context)


def handler404(request, template_name="misc/errors/404-500.html"):
    response = render(request, template_name)
    response.status_code = 404
    return response

def handler500(request, template_name="misc/errors/404-500.html"):
    response = render(request, template_name)
    response.status_code = 500
    return response