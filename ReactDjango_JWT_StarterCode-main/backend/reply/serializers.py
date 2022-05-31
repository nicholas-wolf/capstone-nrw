from rest_framework import serializers
from .models import Reply
from authentication.models import User


class ReplySerializer(serializers.ModelSerializer):

    class Meta:
        model = Reply
        fields = ['id', 'user', 'excursion', 'text']
        depth = 1
