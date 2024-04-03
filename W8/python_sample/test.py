import json
from datetime import datetime as d

# some comment

print(d.now())
a = True
b = False
c = None

# print('Hello world')
# print("Hello, world!")
# print("""Hello,
# world!""")
# print(u"Hëllö, wörld!")


# print("foo" + "bar")
# print("foobar"[0])
# print("foobar"[-1])
# print("foobar"[:3])
# print("{0}: {1}".format("foo", "bar"))
# print("{foo}: {bar}".format(foo="foo", bar="bar"))
# print(len("foobar"))


# a = [1, 2, 3, 4, 10, 12]
# print(type(a))
#
# a = (1, 2, 3, 4, 10, 12)
# print(type(a))


# print(a[1:5])
# print(a[1:5:2])
# a.append(13)
# print(a)
# a.pop()
# print(a)


a = {'name': 'Bob', 'id': '22BD123123', 'address': {'city': 'Almaty', 'street': 'Abay'}}

# print(a['address']['city'])
# print(a['age'])
# print(a.get('age', 20))

# print(a.keys())
# print(a.values())
# print(a.items())


# if a['name'] == 'John':
#     print('OK')
# elif a['name'] == 'Bob':
#     print('NOT OK')
# else:
#     print('ELSE')

# arr = (1, 2, 3, 4, 10, 12)
#
# for i in range(1, 10):
#     print(i)


# def foo():
#     return 10


# print(foo())


# def foo(bar, baz="fit"):
#     return (bar, baz)
#
# print(foo(1))


"""
Class for something
"""


class Foo(object):
    """
    Method for something
    """

    def __init__(self, bar):
        self.bar = bar

    def __str__(self):
        return f'Bar is: {self.bar}'


foo = Foo('asd')
print(foo)
