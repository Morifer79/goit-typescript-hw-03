class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class Hous {
  protected door: boolean;
  protected tenants: Person[];
  constructor(protected key: Key) {
    this.door = false;
  }
  comeIn(person: Person): void {
    if ((this.door = true)) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends Hous {
  openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      return this.door;
    }
    return false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
