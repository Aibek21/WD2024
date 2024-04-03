from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.products),
    # path('products/<int:id>', views.product_detail),
]
