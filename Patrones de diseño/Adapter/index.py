
## Supongamos que tenemos una clase CalculadoraAreaRectangulo que calcula el área de un rectángulo utilizando dos lados, pero necesitamos adaptarla para que ## pueda calcular el área utilizando una base y una altura.

# Interfaz objetivo que necesitamos en nuestro sistema
class CalculadoraArea:
    def calcular_area(self, base, altura):
        pass

# Clase existente que utilizaremos como Adaptee
class CalculadoraAreaRectangulo:
    def calcular_area_rectangulo(self, lado1, lado2):
        return lado1 * lado2

# Adapter para adaptar CalculadoraAreaRectangulo a CalculadoraArea
class AdapterCalculadoraArea(CalculadoraArea):
    def __init__(self, calculadora_rectangulo):
        self.calculadora_rectangulo = calculadora_rectangulo

    def calcular_area(self, base, altura):
        # La clase Adapter utiliza el Adaptee para realizar el cálculo
        return self.calculadora_rectangulo.calcular_area_rectangulo(base, altura)

# Uso del Adapter
calculadora_rectangulo = CalculadoraAreaRectangulo()
adapter = AdapterCalculadoraArea(calculadora_rectangulo)

base = 10
altura = 5

# Utilizando la interfaz objetivo con el Adapter
area = adapter.calcular_area(base, altura)
print(f"El área del rectángulo con base {base} y altura {altura} es: {area}")
