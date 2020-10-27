from rest_framework import serializers
from verkkomedia_api import models


class NewsSerializer(serializers.Serializer):
    """Serializer for News"""
    class Meta:
        model = models.News
        fields = ('id', 'email', 'author', 'header', 'lead', 'text', 'public')

    def create(self, validated_data):
        news = models.News.objects.create_news(
            email=validated_data['email'],
            author=validated_data['author'],
            header=validated_data['header'],
            text=validated_data['text'],
            lead=validated_data['lead'],
            public=validated_data['public']

        )
        return news

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.author = validated_data.get('author', instance.author)
        instance.header = validated_data.get('header', instance.header)
        instance.text = validated_data.get('text', instance.text)
        instance.lead = validated_data.get('lead', instance.lead)
        return super().update(instance, validated_data)
