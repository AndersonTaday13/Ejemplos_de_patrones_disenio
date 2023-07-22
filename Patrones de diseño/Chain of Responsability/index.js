/*
Autor: Anderson Taday

Implementaremos una cadena de manipuladores para procesar solicitudes de préstamos, donde cada manipulador tiene un límite de aprobación y, si no puede aprobar la solicitud, la pasa al siguiente manipulador en la cadena.

*/

// Clase base para los manipuladores
class ManipuladorPrestamo {
  setSiguiente(manipulador) {
    this.siguiente = manipulador;
  }

  aprobarPrestamo(prestamo) {
    if (this.siguiente) {
      this.siguiente.aprobarPrestamo(prestamo);
    }
  }
}

// Manipulador con límite para préstamos pequeños
class ManipuladorPrestamoPequeno extends ManipuladorPrestamo {
  aprobarPrestamo(prestamo) {
    if (prestamo.cantidad <= 10000) {
      console.log(
        "Préstamo aprobado por el Manipulador de Préstamos Pequeños."
      );
    } else if (this.siguiente) {
      this.siguiente.aprobarPrestamo(prestamo);
    } else {
      console.log("El préstamo no puede ser aprobado.");
    }
  }
}

// Manipulador con límite para préstamos medianos
class ManipuladorPrestamoMediano extends ManipuladorPrestamo {
  aprobarPrestamo(prestamo) {
    if (prestamo.cantidad > 10000 && prestamo.cantidad <= 50000) {
      console.log(
        "Préstamo aprobado por el Manipulador de Préstamos Medianos."
      );
    } else if (this.siguiente) {
      this.siguiente.aprobarPrestamo(prestamo);
    } else {
      console.log("El préstamo no puede ser aprobado.");
    }
  }
}

// Manipulador con límite para préstamos grandes
class ManipuladorPrestamoGrande extends ManipuladorPrestamo {
  aprobarPrestamo(prestamo) {
    if (prestamo.cantidad > 50000) {
      console.log("Préstamo aprobado por el Manipulador de Préstamos Grandes.");
    } else {
      console.log("El préstamo no puede ser aprobado.");
    }
  }
}

// Cliente que solicita el préstamo y pasa la solicitud por la cadena de manipuladores
class Cliente {
  solicitarPrestamo(prestamo) {
    const manipuladorPrestamoPequeno = new ManipuladorPrestamoPequeno();
    const manipuladorPrestamoMediano = new ManipuladorPrestamoMediano();
    const manipuladorPrestamoGrande = new ManipuladorPrestamoGrande();

    manipuladorPrestamoPequeno.setSiguiente(manipuladorPrestamoMediano);
    manipuladorPrestamoMediano.setSiguiente(manipuladorPrestamoGrande);

    manipuladorPrestamoPequeno.aprobarPrestamo(prestamo);
  }
}

// Uso del patrón Chain of Responsibility
const cliente = new Cliente();
cliente.solicitarPrestamo({ cantidad: 8000 });
cliente.solicitarPrestamo({ cantidad: 25000 });
cliente.solicitarPrestamo({ cantidad: 75000 });
