const keyChecker = (string, object) => {
    if (string in object) {
        return true
    } else {
        return false
    }
}

const obj = {
    name: "x",
    age: 12
}

let x = keyChecker("name", obj)
let y = keyChecker("egg", obj)

console.log(`${x}\n${y}`);