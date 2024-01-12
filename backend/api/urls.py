from django.urls import path

from api.views import *
from django.urls import re_path as url 

urlpatterns = [
    path('/api', ApiView.as_view(), name = 'api'),

    path('', AllProductView.as_view(), name = "all_product"),
    path('api/product/<int:pk>/', ProductView.as_view(), name = "product"),

    path('api/product/<int:pk>/buy/', ProductBuyView.as_view(), name = "productBuy"),

    path('api/allCategory/', AllCategoryView.as_view(), name = "AllCategoryView"),

    path('api/category/<int:category_id>', GetCategoryView.as_view(), name = "GetCategory"),

    path('api/product/add', AddProductView.as_view(), name = "AddProductView"),

    path('api/product/<int:pk>/delete', DeleteProductView.as_view(), name = "DeleteProductView"),

    path('api/product/<int:pk>/edit', EditProductView.as_view(), name = "EditProductView"),

    path('api/category/get', CategoryGetView.as_view(), name = "CategoryGetView"),
    path('api/volute/get', VoluteGetView.as_view(), name = "VoluteGetView"),

    path('api/allCategory/add', AddCategoryView.as_view(), name = "AddCategoryView"),
    path('api/allCategory/<int:pk>/delete', DeleteCategoryView.as_view(), name = "DeleteCategoryView"),
    path('api/allCategory/<int:pk>/edit', EditCategoryView.as_view(), name = "EditCategoryView"),

    path('api/allVolute/add', AddVoluteView.as_view(), name = "AddVoluteView"),
    path('api/allVolute/<int:pk>/delete', DeleteVoluteView.as_view(), name = "DeleteVoluteView"),
    path('api/allVolute/<int:pk>/edit', EditVoluteView.as_view(), name = "EditVoluteView")
   
]
