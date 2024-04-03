from django.contrib import admin
from api.models import Product, Category


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category')
    search_fields = ('name', 'price', 'category__name')
    list_filter = ('category',)
    readonly_fields = ('name',)
    fieldsets = (
        ('Main info', {'fields': ('name', 'price')}),
        ('Additional info', {'fields': ('category',)}),
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)

# admin.site.register(Product)
