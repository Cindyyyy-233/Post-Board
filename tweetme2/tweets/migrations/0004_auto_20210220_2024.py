# Generated by Django 2.2 on 2021-02-20 20:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_tweet_users'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tweet',
            old_name='users',
            new_name='user',
        ),
    ]