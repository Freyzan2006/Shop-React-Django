from django.urls import path

from users.views import *
from django.urls import re_path as url 

urlpatterns = [
    path('api/login/', UserLoginView.as_view(), name='login'),
    path('api/logout/', UserLogoutView.as_view(), name='logout'),
    path('api/register/', UserReagisterView.as_view(), name='register'),
]
