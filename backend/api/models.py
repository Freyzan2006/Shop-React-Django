from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver

from api.config import API_BACKEND

class MoneyType(models.Model):
    name = models.CharField(max_length = 5, unique = True)

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = 'Волюта'
        verbose_name_plural = "Волюты"


class ProductCategory(models.Model):
    title = models.CharField(max_length=255, unique=True)
   

    def __str__(self):
        return str(self.title)


    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.IntegerField()
    photo = models.ImageField(blank=True, null=True, upload_to='images/')
    amount = models.IntegerField()
    about = models.TextField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, blank=False)
    
    moneytype = models.ForeignKey(MoneyType, on_delete=models.CASCADE, blank=False)

    isHave = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'

    def __str__(self):
        return self.name 

    
    def get_photo(self):
        try:
            return API_BACKEND + self.photo.url
            # return self.photo.url.staticfiles
        except:
            return "https://media.istockphoto.com/id/887464786/vector/no-cameras-allowed-sign-flat-icon-in-red-crossed-out-circle-vector.jpg?s=612x612&w=0&k=20&c=LVkPMBiZas8zxBPmhEApCv3UiYjcbYZJsO-CVQjAJeU="




# Удаление фото
@receiver(pre_delete, sender=Product)
def image_model_delete(sender, instance, **kwargs):
    if instance.photo.name:
        instance.photo.delete(False)