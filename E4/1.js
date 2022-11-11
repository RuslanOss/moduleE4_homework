const object = {
    name: "alex",
    age: 15
}

const getProperty = (obj) => {
    for (let key in obj ) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

getProperty(object)