from django.urls import path
from .views import solve_mechanics

urlpatterns = [
    path('solve/', solve_mechanics, name='solve_mechanics'),
]
