from django.db import models


# One to One - models.OneToOneField() or unique ForeignKey()
# One to Many - models.ForeignKey()
# Many to Many

class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ('-id',)
        # db_table = 'categories'
        # indexes =
        # unique_together  = ('')

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=100, blank=True)
    price = models.IntegerField(verbose_name='Цена')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='products')

    # category = models.OneToOneField(Category, on_delete=models.SET_NULL, null=True)
    # categories = models.ManyToManyField(Category)

    class Meta:
        ordering = ['-price']

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

#
# class CategoryProduct(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
#     category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
#
#     class Meta:
#         unique_together = ['product', 'category']
