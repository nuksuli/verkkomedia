# Generated by Django 2.2 on 2020-12-03 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('verkkomedia_api', '0003_auto_20201203_1923'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='image',
            field=models.ImageField(null=True, upload_to='images/', verbose_name=''),
        ),
    ]