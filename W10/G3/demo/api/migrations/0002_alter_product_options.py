# Generated by Django 4.2.11 on 2024-03-27 11:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'ordering': ['-price']},
        ),
    ]