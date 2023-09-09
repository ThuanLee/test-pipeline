from .ultis import *
from rest_framework.decorators import api_view

@api_view(['GET', 'PUT', 'DELETE'])
def hasPk(request, pk):
    if request.method == 'GET':
        return getNote(request, pk)
    elif request.method == 'PUT':
        return updateNote(request, pk)
    elif request.method == 'DELETE':
        return deleteNote(request, pk)

@api_view(['GET', 'POST'])
def noPk(request):
    if request.method == 'GET':
        return getNotes(request)
    elif request.method == 'POST':
        return createNote(request)
