from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import BaseUserManager


class UserProfileManager(BaseUserManager):
    """Manager for user profiles"""

    def create_user(self, email, name, password=None):
        """Create a new user profile"""
        if not email:
            raise ValueError('User must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password):
        """New superuser with given details"""
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """Database model for users in the system"""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        """Retrieve full name of user"""
        return self.name

    def get_short_name(self):
        """retrieve short name of user"""
        return self.name

    def __str__(self):
        """Return string representation of name"""
        return self.email


class NewsManager(models.Manager):
    """Manager for news"""

    def create_news(self, email, author, header, lead, text, public):
        """Create a News profile"""
        if not email:
            raise ValueError("Email not defined")
        if not author:
            raise ValueError("Author not defined")
        if not header:
            raise ValueError("Header not defined")
        if not lead:
            raise ValueError("Lead not defined")
        if not text:
            raise ValueError("text not defined")

        news = self.model(email=email, author=author,
                          header=header, lead=lead, text=text, public=False)

        news.save(using=self._db)

        return news


class News(models.Model):
    """Database model for news"""

    email = models.EmailField(max_length=255)
    author = models.CharField(max_length=255)
    header = models.CharField(max_length=255)
    lead = models.CharField(max_length=255)
    text = models.CharField(max_length=10000)
    public = models.BooleanField(default=False)

    REQUIRED_FIELDS = ['author']
    USERNAME_FIELD = 'email'

    objects = NewsManager()

    def get_full_name(self):
        """Retrieve full name of user"""
        return self.author

    def get_short_name(self):
        """retrieve short name of user"""
        return self.author

    def __str__(self):
        """Return string representation of name"""
        return self.email


class ImageManager(models.Manager):
    def create_image(news, name, imagefile):
        if not news:
            raise ValueError("Parent news not defined")
        if not name:
            raise ValueError("Name not defined")
        if not imagefile:
            raise ValueError("Image not defined")
        
        image=self.model(news=news, name=name, imagefile=imagefile)

        image.save(using=self._db)

        return image


class Image(models.Model):
    news=models.OneToOneField(News,
        on_delete=models.CASCADE
        primary_key=True)
    name=models.CharField(max_length=500)

    
    image=models.FileField(upload_to='images/', null=True, verbose_name="")

    objects = ImageManager()

    def __str__(self):
        return self.name + ";" str(self.imagefile)