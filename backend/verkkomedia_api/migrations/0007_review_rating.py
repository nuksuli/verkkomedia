# Generated by Django 2.2 on 2020-12-10 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('verkkomedia_api', '0006_auto_20201210_1838'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='rating',
            field=models.IntegerField(default=0),
        ),
    ]