const {faker} = require("@faker-js/faker");
const generateProduct = require("./generateProduct");

// {
    // ...firstnam,lastname,cumpleaños,productos : [ title,price, id]
// }
faker.locale = 'es';

const generateUsers =()=>{

    const arrayProduct = []
    const i = faker.random.numeric(1);
    for (let index = 0; index < i; index++) {
        arrayProduct.push(generateProduct())
    }

    return{
        rol: faker.datatype.boolean() ? "vendedor":"cliente",
        name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        cumpleanos: faker.date.birthdate(),
        productos:arrayProduct,
        isePremium:faker.datatype.boolean() ,
        job:faker.name.jobTitle()
    }
}


module.exports =  generateUsers;