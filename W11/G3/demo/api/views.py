import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from api.models import Product, Category


@csrf_exempt
def categories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        result = [c.to_json() for c in categories]
        return JsonResponse(result, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        category = Category.objects.create(name=data.get('name'))
        # category = Category(name=data.get('name'))
        # category.save()
        return JsonResponse(category.to_json())


@csrf_exempt
def category_detail(request, pk):
    try:
        category = Category.objects.get(id=pk)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)

    if request.method == 'GET':
        return JsonResponse(category.to_json())
    if request.method == 'PUT':
        data = json.loads(request.body)
        category.name = data.get('name')
        category.save()
        return JsonResponse(category.to_json())
    if request.method == 'DELETE':
        category.delete()
        return JsonResponse({}, status=204)


def products(request):
    products = Product.objects.all()
    result = [p.to_json() for p in products]
    return JsonResponse(result, safe=False)
