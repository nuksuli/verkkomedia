from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


from verkkomedia_api import serializers
from verkkomedia_api import models
from verkkomedia_api import permissions


class NewsViewSet(viewsets.ModelViewSet):
    """Handle creating and updating news"""
    queryset = models.News.objects.all()
    serializer_class = serializers.NewsSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    """Handle creating and updating news"""
    queryset = models.UserProfile.objects.all()
    serializer_class = serializers.UserProfileSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    """Handle creating comments"""
    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['news_id']
