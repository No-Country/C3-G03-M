from rest_framework import serializers
from backapp.models.user import User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        flields = ['id' , 'username' , 'password' , 'email','name' , 'is_admin']

    def create(self , validated_data):
        userInstance = User.objects.create(**validated_data)
        return userInstance    

    def to_representation(self, obj):
        user = User.objects.get(id=obj.id)
        return{

            'id': user.id,
            'username': user.username,
            'password': user.password,
            'email': user.email,
            'name': user.name,
            'is_admin': user.is_admin
        }    