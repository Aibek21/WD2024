from django.contrib import admin
from api.models import Product, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'price', 'category']
    search_fields = ['name', 'price', 'category__name']
    list_filter = ['category']
    fieldsets = (
        ('Main Info', {'fields': ('name', 'price')}),
        ('Additional info', {'fields': ('category',)})
    )
    # readonly_fields = ['name']

# admin.site.register(Category)
# admin.site.register(Product)
