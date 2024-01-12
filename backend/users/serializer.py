from rest_framework import serializers

from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User

class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User #AuthenticationForm
        fields = [
            'username',
            'password'
        ]


class UserReagisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username',
            'password1',
            'password2'
        ]