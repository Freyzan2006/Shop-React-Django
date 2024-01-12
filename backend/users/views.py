from django.shortcuts import render
from users.forms import UserLoginForms, UserRegisterForms
from users.serializer import UserLoginSerializer, UserReagisterSerializer

from rest_framework.response import Response 
from rest_framework.views import APIView
from django.contrib.auth import login, logout

from users.config import API_FRONTEND

class UserLoginView(APIView):
    def get(self, request):
        form = UserLoginForms()
        output = [
            {
                "form": str(form)
            }
        ]
        return Response(output)
    

    def post(self, request):

        serializer = UserLoginSerializer(data = request.data)
     
        if serializer.is_valid(raise_exception = True):
            form = UserLoginForms(data=request.POST)
            user = form.get_user()
            login(request, user)
            return redirect(API_FRONTEND)
          

class UserLogoutView(APIView):
    def get(self, request):
        logout(request)
        return redirect(API_FRONTEND)


class UserReagisterView(APIView):
    def get(self, request):
        form = UserRegisterForms()

        output = [
            {
                "form": str(form)
            }
        ]

        return Response(output)
    

    def post(self, request):
        serializer = UserReagisterSerializer(data = request.data)
        
        if serializer.is_valid(raise_exception = True):
            form = UserLoginForms(data=request.POST)
            
            user = form.save()
            return redirect(API_FRONTEND)




