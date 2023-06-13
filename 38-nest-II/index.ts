interface puerta {
    puertaAbierta: boolean;
    closeDoor:Function;
}


class auto implements puerta {
  puertaAbierta: boolean;
  color: string;
  constructor() {
    this.color = 'red';
  }

  getColor = () => {
    console.log(this.color);
  };

  closeDoor = () => {

  }

  statusDoor = () => {
    console.log(this.puertaAbierta);
  }
}

const car = new auto();
car.getColor();
