from django.urls import path
from . import views

urlpatterns = [
    path('note/<int:pk>/', views.hasPk, name='hasPk'),
    path('', views.noPk, name='noPk')
]