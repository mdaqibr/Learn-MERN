class MathUtils {
  constructor(userName, num1, num2) {
    this.name =  userName;
    this.a = num1;
    this.b = num2;
  }

  add() {
    // console.log(this); // MathUtils { name: 'Aqib', a: 3, b: 1 }
    let hash = {
      name: "Node",
      func: function() {
        console.log("Func defined in hash.");

        return true
      },
    };

    console.log("name", hash.name);
    hash.func();
    console.log("func", hash.func());

    return `Sum by user ${ this.name } is ${ this.a  + this.b }`
  }
  
  sub(a, b) {
    console.log(this);

    return `Sub by user ${ this.name } is ${ this.a  - this.b }`
  }
}

module.exports = MathUtils;