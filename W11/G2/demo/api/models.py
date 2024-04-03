from django.db import models


# One to One - models.OneToOneField() or unique=True
# One to Many - models.ForeignKey()
# Many to Many - models.ManyToMany() or additional table

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        # ordering = ['-id']
        # db_table = 'categories'

    def __str__(self):
        return f'ID:{self.id} {self.name}'

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    price = models.IntegerField(verbose_name='Цена')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name='products')

    # categories = models.ManyToManyField(Category)
    # category = models.OneToOneField(Category, on_delete=models.SET_NULL, null=True)

    class Meta:
        ordering = ['-price']

    def __str__(self):
        return f'ID:{self.id} {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

# class CategoryProduct(models.Model):
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
#     product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
#
#     class Meta:
#         unique_together = ['category', 'product']
