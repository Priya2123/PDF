# Generated by Django 3.1.3 on 2021-11-15 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0004_auto_20211115_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='password',
            field=models.CharField(default='admin@123', max_length=500),
        ),
    ]
