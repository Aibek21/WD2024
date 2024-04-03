from django.db import models


# One to One - models.OneToOneField()
# One to Many - models.ForeignKey()
# Many to Many - models.ManyToMany() or additional table


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['-id']

    def __str__(self):
        return f'ID: {self.id}: {self.name}'

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    price = models.IntegerField(verbose_name='Цена')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, verbose_name='category', null=True,
                                 related_name='products')

    # category = models.OneToOneField(Category, on_delete=models.SET_NULL, verbose_name='category', null=True,
    #                                 related_name='product')
    # category = models.ManyToManyField(Category)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        ordering = ['-price']

    def __str__(self):
        return f'ID: {self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

# class ProductCategory(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, verbose_name='category', null=True,
#                                  related_name='products')
#     product = models.ForeignKey(Product, on_delete=models.SET_NULL, verbose_name='product', null=True,
#                                 related_name='categories')
#
#     class Meta:
#         unique_together = ['category', 'product']
