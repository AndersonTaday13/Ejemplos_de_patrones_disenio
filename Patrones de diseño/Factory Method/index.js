/*
Autor: Anderson Taday

crearemos un Factory Method para crear diferentes tipos de vehículos, como automóviles y motocicletas.

*/

// Clase base para todos los vehículos
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  obtenerDescripcion() {
    return `Vehículo ${this.marca} ${this.modelo}`;
  }
}

// Clase para automóviles
class Automovil extends Vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
  }

  obtenerDescripcion() {
    return `Automóvil ${super.obtenerDescripcion()}`;
  }
}

// Clase para motocicletas
class Motocicleta extends Vehiculo {
  constructor(marca, modelo) {
    super(marca, modelo);
  }

  obtenerDescripcion() {
    return `Motocicleta ${super.obtenerDescripcion()}`;
  }
}

// Factory Method para crear diferentes tipos de vehículos
class FabricaVehiculos {
  crearVehiculo(tipo, marca, modelo) {
    if (tipo === "automovil") {
      return new Automovil(marca, modelo);
    } else if (tipo === "motocicleta") {
      return new Motocicleta(marca, modelo);
    } else {
      throw new Error("Tipo de vehículo no válido.");
    }
  }
}

// Uso del Factory Method
const fabrica = new FabricaVehiculos();

const automovil1 = fabrica.crearVehiculo("automovil", "Toyota", "Corolla");
const motocicleta1 = fabrica.crearVehiculo("motocicleta", "Honda", "CBR");

console.log(automovil1.obtenerDescripcion()); // Resultado: Automóvil Vehículo Toyota Corolla
console.log(motocicleta1.obtenerDescripcion()); // Resultado: Motocicleta Vehículo Honda CBR
