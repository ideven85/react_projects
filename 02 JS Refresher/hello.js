const getName = (name) => {
    return "Hello: " + name;
}


const name=(name)=>{
    console.log(name);
}

console.log(getName("deven"));
name("deven");

const obj = {
    'name': 'deven'
}
//Spread Operator
const newObj = {
    ...obj,
    'age': 32
}

console.log(newObj);