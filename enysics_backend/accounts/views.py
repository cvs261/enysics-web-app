from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from .serializers import RegisterSerializer, LoginSerializer

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "user": {
                    "username": user.username,
                    "email": user.email,
                },
                "token": token.key
            })
        return Response(serializer.errors, status=400)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)
            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({
                    "user": {
                        "username": user.username,
                        "email": user.email,
                    },
                    "token": token.key
                })
            return Response({"error": "Invalid credentials"}, status=400)
        return Response(serializer.errors, status=400)

from django.http import JsonResponse
from rest_framework.decorators import api_view
import sympy as sp
import matplotlib.pyplot as plt
import io
import base64

@api_view(['POST'])
def solve_mechanics(request):
    data = request.data
    mass = float(data.get('mass', 0))
    force = float(data.get('force', 0))
    angle = float(data.get('angle', 0))

    # Calculăm accelerația
    acceleration = force / mass

    # Folosim SymPy pentru pași
    F, m, a = sp.symbols('F m a')
    equation = sp.Eq(F, m * a)
    steps = sp.solve(equation, a)

    # Generăm graficul
    plt.figure(figsize=(5, 3))
    plt.plot([0, force], [0, mass * acceleration], marker='o')
    plt.title("Force vs Acceleration")
    plt.xlabel("Force (N)")
    plt.ylabel("Acceleration (m/s²)")
    plt.grid()

    # Convertim graficul în format base64
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    graph = base64.b64encode(buf.getvalue()).decode('utf-8')
    buf.close()

    return JsonResponse({
        'steps': f"Force = {force} N, Mass = {mass} kg -> Acceleration = {acceleration:.2f} m/s²",
        'graph': f"data:image/png;base64,{graph}"
    })
