from django.urls import path, re_path
from api import views

urlpatterns = [
    path('products/', views.products),
    path('categories/', views.categories),
    path('categories/<int:pk>/', views.category_detail),
]
