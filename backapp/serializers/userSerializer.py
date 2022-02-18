from rest_framework import serializers
from backapp.models.user import User
from rest_framework.validators import UniqueTogetherValidator

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username' , 'password' , 'email','name' , 'is_admin']
