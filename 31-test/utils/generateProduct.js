const { faker } = require("@faker-js/faker")

faker.locale="es"

const generateProduct=()=>{

    return {
        title: faker.commerce.product(),
        price:faker.commerce.price(),
        id: faker.database.mongodbObjectId(),
        code: faker.random.alphaNumeric(5),
        description: faker.lorem.paragraph()
    }
}


module.exports =generateProduct;