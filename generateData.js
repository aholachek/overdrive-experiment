const faker = require('faker')


const arr = Array.from(Array(100).keys()).map(i=>{
  return {
    id : i,
    name : faker.name.findName(),
    city : faker.address.city(),
    avatar : faker.image.avatar(),
    job : faker.name.jobTitle(),
    text : faker.lorem.paragraph()
  }
})

 console.log(JSON.stringify(arr));