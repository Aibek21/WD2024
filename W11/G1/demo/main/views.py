from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from datetime import datetime, timedelta


def index(request):
    return HttpResponse('Hello world')


def home(request):
    return HttpResponse('<h1>Home page</h1>')


def hours_ahead(request, hours):
    time_str = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(f"<h1 style='color: red;'>Date time: {time_str}</h1>")


def json_sample(request):
    sample_dict = {
        'name': 'Bob',
        'id': '20BD123123'
    }
    return JsonResponse(sample_dict)


products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000
    }
    for _id in range(20)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, id):
    for product in products:
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product not found'})
