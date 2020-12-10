from rest_framework import serializers
from verkkomedia_api import models


class NewsSerializer(serializers.ModelSerializer):
    """Serializer for News"""
    class Meta:
        model = models.News
        fields = ('id', 'email', 'author', 'header', 'lead', 'text', 'image')

    def create(self, validated_data):
        news = models.News.objects.create_news(
            email=validated_data['email'],
            author=validated_data['author'],
            header=validated_data['header'],
            text=validated_data['text'],
            lead=validated_data['lead'],
            image=validated_data['image'],
            public=False
        )

        return news

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.author = validated_data.get('author', instance.author)
        instance.header = validated_data.get('header', instance.header)
        instance.text = validated_data.get('text', instance.text)
        instance.lead = validated_data.get('lead', instance.lead)

        return super().update(instance, validated_data)


class ReviewSerializer(serializers.ModelSerializer):
    """Serializer for comments"""
    class Meta:
        model = models.Review
        fields = ('id', 'username', 'text', 'news_id')

    def create(self, validated_data):
        review = models.Review.objects.create_review(
            username=validated_data['username'],
            text=validated_data['text'],
            news_id=validated_data['news_id']
        )

        return review


class UserProfileSerializer(serializers.ModelSerializer):
    """Serializers a user profile object"""
    class Meta:
        model = models.UserProfile
        fields = ('id', 'email', 'name', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {'input_type': 'password'}
            }
        }

    def create(self, validated_data):
        """Create and return a new user"""
        user = models.UserProfile.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password']
        )

        return user

    def update(self, instance, validated_data):
        """handle updating user account"""
        if 'password' in validated_data:
            password = validated_data.pop('password')
            instance.set_password(password)
        return super().update(instance, validated_data)
