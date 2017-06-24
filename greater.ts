
/**
 * Greeter class, to Greet user.
 * @class Greeter,
 * greet method to print greeting.
 */
class Greeter {
    private userName: string; // UserName property.
    //Constructer.
    constructor (name:string) {
        this.userName = name;
    }

    // greet method to pring greeting.
    greet():void {
        console.log("Hello, " + this.userName);
    }
}

var user = new Greeter("Raj"); // created user object.
user.greet(); // Hello, Raj