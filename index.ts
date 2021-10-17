console.log("running");
class Cua {
  private price: number;
  constructor(price: number) {
    this.price = price;
  }
  public getCuaInfo() {
    console.log(`
        price: ${this.price};
        `);
  }
  protected total(count: number): number {
    return 0;
  }
  public getPrice() {
    return this.price;
  }
}
class _CuaGach extends Cua {
  constructor(price: number) {
    super(price);
  }
  total(count: number): number {
    var a = Math.floor(count / 3);
    var b = count - a * 3;
    return this.getPrice() * (a + b);
  }
}
class _CuaThit extends Cua {
  constructor(price: number) {
    super(price);
  }
  total(count: number): number {
    var a = Math.floor(count / 2);
    var b = count - a * 2;
    return this.getPrice() * (a + b);
  }
}
let cuaGach = new _CuaGach(500);
let cuaThit = new _CuaThit(300);
console.log("Gia tien cua gach:", cuaGach.total(500));
console.log("Gia tien cua thit: ", cuaThit.total(201));
