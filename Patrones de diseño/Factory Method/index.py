# implementaremos un Factory Method para crear diferentes tipos de productos electrónicos, como teléfonos y laptops.
# Clase base para todos los productos electrónicos
class ProductoElectronico:
    def descripcion(self):
        pass

# Implementaremos un Factory Method para crear diferentes tipos de productos electrónicos, como teléfonos y laptops.

# Clase para teléfonos


class Telefono(ProductoElectronico):
    def descripcion(self):
        return "Teléfono"

# Clase para laptops


class Laptop(ProductoElectronico):
    def descripcion(self):
        return "Laptop"

# Factory Method para crear diferentes tipos de productos electrónicos


class FabricaProductosElectronicos:
    def crear_producto(self, tipo):
        if tipo == "telefono":
            return Telefono()
        elif tipo == "laptop":
            return Laptop()
        else:
            raise ValueError("Tipo de producto electrónico no válido.")


# Uso del Factory Method
fabrica = FabricaProductosElectronicos()

# Crear un teléfono
telefono = fabrica.crear_producto("telefono")
print(telefono.descripcion())  # Resultado: Teléfono

# Crear una laptop
laptop = fabrica.crear_producto("laptop")
print(laptop.descripcion())    # Resultado: Laptop
# Clase base para todos los productos electrónicos


class ProductoElectronico:
    def descripcion(self):
        pass

# Clase para teléfonos


class Telefono(ProductoElectronico):
    def descripcion(self):
        return "Teléfono"

# Clase para laptops


class Laptop(ProductoElectronico):
    def descripcion(self):
        return "Laptop"

# Factory Method para crear diferentes tipos de productos electrónicos


class FabricaProductosElectronicos:
    def crear_producto(self, tipo):
        if tipo == "telefono":
            return Telefono()
        elif tipo == "laptop":
            return Laptop()
        else:
            raise ValueError("Tipo de producto electrónico no válido.")


# Uso del Factory Method
fabrica = FabricaProductosElectronicos()

# Crear un teléfono
telefono = fabrica.crear_producto("telefono")
print(telefono.descripcion())  # Resultado: Teléfono

# Crear una laptop
laptop = fabrica.crear_producto("laptop")
print(laptop.descripcion())    # Resultado: Laptop
