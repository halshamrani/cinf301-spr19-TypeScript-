// Person interface

interface IPerson
{
    name           : string;
    age            : number;
    isMarried      : boolean;
    contactNumbers : string[];
}


// User class

class User implements IPerson
{
    name           : string;
    age            : number;
    isMarried      : boolean;
    contactNumbers : string[];

    // constructor

    constructor(name: string, age: number, isMarried: boolean, contactNumbers: string[])
    {
        this.name           = name;
        this.age            = age;
        this.isMarried      = isMarried;
        this.contactNumbers = contactNumbers;
    }

    // Getters and setters for each property

    getName() : string
    {
        return this.name;
    }

    setName(name: string) : void
    {
        this.name = name;
    }
    
    getAge() : number
    {
        return this.age;
    }

    setAge(age: number) : void
    {
        this.age = age;
    }

    getIsMarried() : boolean
    {
        return this.isMarried;
    }

    setIsMarried(married : boolean) : void
    {
        this.isMarried = married;
    }
    
    getIsContactNumbers() : string[]
    {
        return this.contactNumbers;
    }

    setContactNumbers(contactNumbers : string[]) : void
    {
        this.contactNumbers = contactNumbers;
    }
}

// create 2 users

let users : User[] = [
    new User("Hassan", 23, false, ["123456789", "987654321"]),
    new User("D.Plante", 45, true, ["0300-1234567", "03011234567"])
];

// show the users on browser

users.forEach((user : User) =>
{
    document.write(`<h2>${user.getName()} Details:</h2>`);
    document.write(`<p>Age: ${user.getAge()}</p>`);
    document.write(`<p>Is Married: ${user.getIsMarried()}</p>`);
    document.write(`<p>Contact Numbers: ${user.getIsContactNumbers().join(', ')}</p>`);
});