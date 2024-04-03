from django.urls import path, re_path
from main import views

urlpatterns = [
    path('index/', views.index),
    path('home/', views.home),
    # re_path('hours_ahead/(\d{1,2})/$', views.hours_ahead),
    path('hours_ahead/<int:hours>', views.hours_ahead),
    path('json_sample/', views.json_sample),
    path('products/', views.product_list),
    path('products/<int:id>', views.product_detail),
]
