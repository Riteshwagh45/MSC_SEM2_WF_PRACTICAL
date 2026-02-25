from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, 'school/home.html')


def about(request):
    return render(request, 'school/about.html')


def contact(request):
    return render(request, 'school/contact.html')

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def home(request):
    return render(request, 'school/home.html')


def about(request):
    return render(request, 'school/about.html')


def contact(request):
    return render(request, 'school/contact.html')


def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'school/login.html', {
                'error': 'Invalid Username or Password'
            })
    return render(request, 'school/dashboard.html')


def user_logout(request):
    logout(request)

    return render(request, 'school/login.html')


@login_required(login_url='login')
def dashboard(request):
    return render(request, 'school/dashboard.html')


def user_logout(request):
    logout(request)
    return redirect('login')

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'school/login.html', {
                'error': 'Invalid Username or Password'
            })

    return render(request, 'school/login.html')


@login_required(login_url='login')
def dashboard(request):
    return render(request, 'school/dashboard.html')


def user_logout(request):
    logout(request)
    return redirect('login')
