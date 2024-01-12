from rest_framework import serializers
from api.models import Product, ProductCategory, MoneyType

class AllProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'pk',
            'name', 
            'price',
            'photo',
            'amount',
            'about',
            'isHave',
            'created_at',
            'updated_at',

            'category',
            'moneytype'
        ]


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = [
            'title'
        ]


class MoneyTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoneyType
        fields = [
            'name',
        ]


