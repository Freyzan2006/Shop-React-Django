from rest_framework.views import APIView
from api.models import Product, ProductCategory, MoneyType
from api.serializer import AllProductSerializer, ProductCategorySerializer, MoneyTypeSerializer
from rest_framework.response import Response 

from django.shortcuts import redirect, render
from api.forms import AddProductForms, EditProductForms, EditCategoryForms

import cloudipsp 


from api.config import API_FRONTEND

api_info = [
    {
        "path": '/api',
        "about": 'info about api',
        "method": 'GET'
    },
    {
        "path": '/api/product',
        "about": 'all the product',
        "method": 'GET'
    }
]

class ApiView(APIView):
    def get(self, request):
        output = [
            {
                "path": output.path,
                "about": output.about,
                "method": output.method 
            } for output in api_info
        ] 

        return Response(output)


class AllProductView(APIView):
    def get(self, request):
       
        output = [
            {   
                'pk': output.pk,
                "name": output.name,
                'price': output.price,
                'photo': output.get_photo(),
                'amount': output.amount,
                'about': output.about,
                'isHave': output.isHave,
                'created_at': output.created_at,
                'updated_at': output.updated_at,

                'moneytype': str(output.moneytype),
                'category': str(output.category)
            } for output in Product.objects.all()
        ]

        return Response(output)


    def post(self, request):
        serializer = AllProductSerializer(data = request.data)
        # serializer_category = ProductCategorySerializer(data = request.data)
        # serializer_money_type = MoneyTypeSerializer(data = request.data)

        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)



class AddProductView(ApiView):
    def get(self, request):
        form = AddProductForms()
        output = [
            {
                "form": str(form)
            }
        ]
        return Response(output)


    def post(self, request):
        serializer = AllProductSerializer(data = request.data)

        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return redirect(API_FRONTEND)
            # return Response(serializer.data)


class DeleteProductView(ApiView):
    def post(self, request, pk):
        try:
            find = Product.objects.get(pk = pk)
            find_img = str(find.photo)
            
            
            find.delete()
            

            return redirect(API_FRONTEND)
        except:
            print("Не придвиденная ошибка !")
            return redirect(API_FRONTEND)


class EditProductView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk = pk)
        form = EditProductForms(instance = product)

        output = [
            {   
                "img": str(product.get_photo()),
                "form": str(form)
            }
        ]
        return Response(output)

    def post(self, request, pk):
        serializer = AllProductSerializer(data = request.data)

        if serializer.is_valid():
            product = Product.objects.get(pk = pk)
        
            product.name = request.data['name']
            product.price = request.data['price']

            if request.data['photo']:
                product.photo = request.data['photo']
            product.amount = request.data['amount']
            product.about = request.data['about']
            product.category_id = request.data['category'] 
            product.moneytype_id = request.data['moneytype']
            if request.data['isHave'] == "on":
                product.isHave = True
            else:
                product.isHave = False

            product.save()
            return redirect(API_FRONTEND)
        
        return redirect(API_FRONTEND)


class ProductView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk = pk)
        
        output = [
            {
                'pk': product.pk,
                "name": product.name,
                'price': product.price,
                'photo': product.get_photo(),
                'amount': product.amount,
                'about': product.about,
                'isHave': product.isHave,
                'created_at': product.created_at,
                'updated_at': product.updated_at,

                'moneytype': str(product.moneytype),
                'category': str(product.category)
            } 
        ]
        

        return Response(output)
    








class ProductBuyView(APIView):
    def get(self, request, pk):
        product = Product.objects.get(pk = pk)
        
        api = cloudipsp.Api(merchant_id = 1396424, secret_key = 'test') # merchant_id = id компании
        checkout = cloudipsp.Checkout(api=api)

        data = {
            "currency": "RUB",
            "amount": str(product.price) + "000"
        }

        url = checkout.url(data).get('checkout_url')

        output = [
            {   
                "nama": "Ссылка на покупку",
                "url_buy": url
            }
        ]
        
        
        return Response(output)
    


class AllCategoryView(ApiView):
    def get(self, request):        
        output = [
            {   
                "pk": el.pk,
                "title": el.title,
            } for el in ProductCategory.objects.all()
        ]

        return Response(output)


class GetCategoryView(ApiView):
    def get(self, request, category_id):
        
        prodictCategory = Product.objects.filter(category_id = category_id)

        output = [
            {
                'pk': product.pk,
                "name": product.name,
                'price': product.price,
                'photo': product.get_photo(),
                'amount': product.amount,
                'about': product.about,
                'isHave': product.isHave,
                'created_at': product.created_at,
                'updated_at': product.updated_at,

                'moneytype': str(product.moneytype),
                'category': str(product.category)
            } for product in prodictCategory
        ]

        return Response(output)






class CategoryGetView(ApiView):
    def get(self, request):
        output = [
            {
                "pk": el.pk,
                "title": el.title 
            } for el in ProductCategory.objects.all()
        ]
        
        return Response(output)


class VoluteGetView(ApiView):
    def get(self, request):
        output = [
            {   
                "pk": el.pk,
                "name": el.name
            } for el in MoneyType.objects.all()
        ]

        return Response(output)


from api.forms import AddCategoryForms
class AddCategoryView(ApiView):
    def get(self, request):
        form = AddCategoryForms()
        
        output = [
            {
                "form": str(form)
            }
        ]

        return Response(output)

    
    def post(self, request):
        
        serializer = ProductCategorySerializer(data = request.data)

        

        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return redirect(API_FRONTEND)
            # return Response(serializer.data)


class DeleteCategoryView(ApiView):
    def post(self, request, pk):
        try:
            ProductCategory.objects.get(pk = pk).delete()
            return redirect(API_FRONTEND)
        except:
            print('Err')
            return redirect(API_FRONTEND)


class EditCategoryView(APIView):
    def get(self, request, pk):
        category = ProductCategory.objects.get(pk = pk)
        form = EditCategoryForms(instance = category)

        output = [
            {   
                "form": str(form)
            }
        ]
        return Response(output)

    def post(self, request, pk):
        serializer = ProductCategorySerializer(data = request.data)

        if serializer.is_valid():
            category = ProductCategory.objects.get(pk = pk)
            category.title = request.data['title']
            category.save()
            return redirect(API_FRONTEND)
        
        return redirect(API_FRONTEND)




from api.forms import AddVoluteForms
class AddVoluteView(ApiView):
    def get(self, request):
        form = AddVoluteForms()
        
        output = [
            {
                "form": str(form)
            }
        ]

        return Response(output)

    
    def post(self, request):
        
        serializer = MoneyTypeSerializer(data = request.data)

        

        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return redirect(API_FRONTEND)
            



class DeleteVoluteView(ApiView):
    def post(self, request, pk):
        try:
            MoneyType.objects.get(pk = pk).delete()
            return redirect(API_FRONTEND)
        except:
            print('Err')
            return redirect(API_FRONTEND)

from api.forms import EditVoluteForms
class EditVoluteView(APIView):
    def get(self, request, pk):
        volute = MoneyType.objects.get(pk = pk)
       
        form = EditVoluteForms(instance = volute)

        output = [
            {   
                "form": str(form)
            }
        ]
        return Response(output)

    def post(self, request, pk):
        serializer = MoneyTypeSerializer(data = request.data)

        if serializer.is_valid():
            volute = MoneyType.objects.get(pk = pk)
            volute.name = request.data['name']
            volute.save()
            return redirect(API_FRONTEND)
        
        return redirect(API_FRONTEND)