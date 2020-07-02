FROM python:3.6.3
ENV PYTHONBUFFERED 1
RUN mkdir /code
ADD ./site_master /code
WORKDIR /code
RUN pip install --trusted-host pypy.org --trusted-host files.pythonhosted.org -r requirements.txt