from django.http import JsonResponse
from rest_framework.decorators import api_view
import sympy as sp

@api_view(['POST'])
def solve_mechanics(request):
    data = request.data
    mass = float(data.get('mass', 0))
    force = float(data.get('force', 0))

    # Calculăm accelerația
    if mass <= 0:
        return JsonResponse({'error': 'Mass must be greater than 0'}, status=400)

    acceleration = force / mass

    # Folosim SymPy pentru pași
    F, m, a = sp.symbols('F m a')
    equation = sp.Eq(F, m * a)
    solution = sp.solve(equation, a)

    # Returnăm datele pentru frontend
    data_points = [
        {'force': f, 'acceleration': f / mass} for f in range(0, int(force) + 10, 10)
    ]

    return JsonResponse({
        'steps': f"Force = {force} N, Mass = {mass} kg -> Acceleration = {acceleration:.2f} m/s²",
        'data_points': data_points,  # Datele pentru grafic
    })
