/**
 * Greeter class, to Greet user.
 * @class Greeter,
 * greet method to print greeting.
 */
var Greeter = (function () {
    //Constructer.
    function Greeter(name) {
        this.userName = name;
    }
    // greet method to pring greeting.
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.userName);
    };
    return Greeter;
}());
var user = new Greeter("Raj"); // created user object.
user.greet();
