from django.http import HttpResponse, JsonResponse
from datetime import datetime, timedelta


def index(request):
    return HttpResponse('Hello World')


def home(request):
    return HttpResponse('<h1>Home page</h1>')


def hours_ahead(request, hours):
    time_str = datetime.now() + timedelta(hours=int(hours))
    return HttpResponse(time_str)


def sample_json(request):
    sample_dict = {
        'id': '20BD010101',
        'name': 'Bob'
    }
    return JsonResponse(sample_dict)


products = [
    {
        'id': i,
        'name': f'Product {i}',
        'price': i * 1000
    }
    for i in range(20)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, id):
    for product in products:
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})
