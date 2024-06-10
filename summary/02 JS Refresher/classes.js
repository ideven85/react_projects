class Person{
    constructor(){
        this.name="Deven Kalra";
    }
    printName(){
        console.log(this.name);
    }
}

const person = () => {
    const obj = {
        'name': 'Deven',
        'age': 23
    }
    const objects = new Array(10);
    for(let i=0;i<10;i++){
        objects[i]={'name':obj.name,'age':obj.age+i};
    }
    const a  = {...obj,...objects};
    console.log(a);
}

//new Person().printName();
person();