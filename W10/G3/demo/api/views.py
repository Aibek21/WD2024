from django.http import JsonResponse
from django.shortcuts import render
from api.models import Product


def products(request):
    products = Product.objects.all()
    result = [p.to_json() for p in products]
    return JsonResponse(result, safe=False)
