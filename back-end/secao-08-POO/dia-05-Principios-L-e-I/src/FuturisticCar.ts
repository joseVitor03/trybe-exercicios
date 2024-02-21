import { IAirPlane, ICar, IVehicle } from "./interfaces";

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

class Car implements ICar {
  drive(): void {
    console.log('Drive a car');
    
  }
}

class AirPlane implements IAirPlane {
  fly(): void {
    console.log('Fly a airplane');
    
  }
}