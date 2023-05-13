const normalPerson = {
    firstName: 'abraka',
    lastName: 'dabra',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tax, tips) {
        this.salary = this.salary - amount - tax - tips;
        return this.salary;
    }
}
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'hero',
    lastName: 'salam',
    salary: 20000
}

const frindlyPerson = {
    firstName: 'Brother',
    lastName: 'Rahul',
    salary: 25000
}

// use bind
// const frindlyChargeBill = normalPerson.chargeBill.bind(frindlyPerson);
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// frindlyChargeBill(3000)
// console.log("heroPerson: ", heroPerson.salary);
// console.log("normal person: ", normalPerson.salary);
// console.log("frindly Person: ", frindlyPerson.salary);


// call and apply use

normalPerson.chargeBill.call(heroPerson, 1000, 10, 100);
console.log('heroPerson: ', heroPerson.salary);

normalPerson.chargeBill.apply(frindlyPerson, [1000, 100, 10]);
console.log('frindlyPerson: ', frindlyPerson.salary);