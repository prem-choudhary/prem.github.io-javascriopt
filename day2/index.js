// Using Object.create()
const prototypeObject = {
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

const obj = Object.create(prototypeObject);
obj.name = 'Prem';
obj.greet(); // Outputs: Hello, John

// Using constructor function
function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
}

const person = new Person('Arru');
person.greet(); // Outputs: Hello, John
