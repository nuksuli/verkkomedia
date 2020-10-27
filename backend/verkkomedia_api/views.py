from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters

from verkkomedia_api import serializers
from verkkomedia_api import models


class NewsViewSet(viewsets.ModelViewSet):
    """Handle creating and updating news"""
    serializer_class = serializers.NewsSerializer
    queryset = models.News.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('header', 'author',)
