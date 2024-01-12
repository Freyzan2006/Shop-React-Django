from django.contrib import admin
from api.models import Product, ProductCategory, MoneyType


admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(MoneyType)