# Generated by Django 5.0 on 2023-12-30 05:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MoneyType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=5, unique=True)),
            ],
            options={
                'verbose_name': 'Волюта',
                'verbose_name_plural': 'Волюты',
            },
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Продукт', 'verbose_name_plural': 'Продукты'},
        ),
        migrations.AddField(
            model_name='product',
            name='moneytype',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.moneytype'),
            preserve_default=False,
        ),
    ]
