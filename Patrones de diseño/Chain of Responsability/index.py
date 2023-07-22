# Implementaremos una cadena de manipuladores para procesar solicitudes de compra, donde cada manipulador tiene un límite de aprobación y, si no puede aprobar # la solicitud, la pasa al siguiente manipulador en la cadena.

# Clase base para los manipuladores
class ManipuladorCompra:
    def set_siguiente(self, manipulador):
        self.siguiente = manipulador

    def aprobar_compra(self, monto):
        pass

# Manipulador con límite para compras pequeñas
class ManipuladorCompraPequena(ManipuladorCompra):
    def aprobar_compra(self, monto):
        if monto <= 500:
            print("Compra aprobada por el Manipulador de Compras Pequeñas.")
        elif self.siguiente:
            self.siguiente.aprobar_compra(monto)
        else:
            print("La compra no puede ser aprobada.")

# Manipulador con límite para compras medianas
class ManipuladorCompraMediana(ManipuladorCompra):
    def aprobar_compra(self, monto):
        if monto > 500 and monto <= 5000:
            print("Compra aprobada por el Manipulador de Compras Medianas.")
        elif self.siguiente:
            self.siguiente.aprobar_compra(monto)
        else:
            print("La compra no puede ser aprobada.")

# Manipulador con límite para compras grandes
class ManipuladorCompraGrande(ManipuladorCompra):
    def aprobar_compra(self, monto):
        if monto > 5000:
            print("Compra aprobada por el Manipulador de Compras Grandes.")
        else:
            print("La compra no puede ser aprobada.")

# Cliente que realiza la solicitud de compra y pasa la solicitud por la cadena de manipuladores
class Cliente:
    def realizar_compra(self, monto):
        manipulador_pequeno = ManipuladorCompraPequena()
        manipulador_mediano = ManipuladorCompraMediana()
        manipulador_grande = ManipuladorCompraGrande()

        manipulador_pequeno.set_siguiente(manipulador_mediano)
        manipulador_mediano.set_siguiente(manipulador_grande)

        manipulador_pequeno.aprobar_compra(monto)

# Uso del patrón Chain of Responsibility
cliente = Cliente()
cliente.realizar_compra(300)   # Resultado: Compra aprobada por el Manipulador de Compras Pequeñas.
cliente.realizar_compra(2500)  # Resultado: Compra aprobada por el Manipulador de Compras Medianas.
cliente.realizar_compra(10000) # Resultado: Compra aprobada por el Manipulador de Compras Grandes.
