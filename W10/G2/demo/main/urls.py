from django.urls import path, re_path
from main import views

urlpatterns = [
    path('index/', views.index),
    path('home/', views.home),
    path('time_delta/<int:hours>/', views.hours_ahead),
    # re_path(r'time_delta/(\d{1,2})/$', views.hours_ahead),
    path('sample_json/', views.sample_json),
    path('products/', views.product_list),
    path('products/<int:id>', views.product_detail)
]
