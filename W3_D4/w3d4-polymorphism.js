class Shape {
  constructor (name, length, width) {
    this.name = name 
    this.length = length
    this.width = width
  }
}

class Triangle extends Shape {
  constructor (name,length,width, alas) {
    super (name,length,width)
    this.alas = alas
  }

  area () {
    let setengah = 0.5;
    return setengah * this.alas * this.width;
  }
}


class Kite extends Shape {
  constructor (name,diagonal1,diagonal2) {
    super (name)
    this.diagonal1 = diagonal1;
    this.diagonal2 = diagonal2;
  }

  area () {
    let setengah = 0.5;
    return setengah * this.diagonal1 * this.diagonal2;
  }
}

const layang = new Kite("layang1", 123, 234 );

const triangle = new Triangle('segitiga2', undefined, 76, 23);

console.log(layang);
console.log(layang.area());
console.log(triangle);
console.log(triangle.area());
