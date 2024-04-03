from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:pk>/', views.product_detail),
    path('categories/', views.categories),
    path('categories/<int:pk>/', views.category_detail),
    path('categories/<int:pk>/products/', views.category_products),
]
