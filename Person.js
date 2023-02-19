class Person {
    // Include a Constructor Method for Properties: 
        // 1. Name
        // 2. Bags
            // 2a. Bags should contain/reference a data type for storing more than one bag object.

    // Include an addBag method
    constructor(name){
        this.name = name;
    }
    constructor(bags){
        this.bags = bags;
    }
}

//Export the Module
module.exports = Person;