from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:pk>/', views.product_detail),
    path('categories/', views.categories),
    path('categories/<int:pk>/', views.category_detail),
]
