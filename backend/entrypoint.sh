daphne -b 0.0.0.0 -p 8001 myNote.asgi:application &

gunicorn myNote.wsgi:application --bind 0.0.0.0:8000
