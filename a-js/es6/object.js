function createPerson(name='jq',age='18'){
    return {
        name,
        age
    }
}

let person={
    name:'jq',
    sayName(){
        console.log(this.name);
    }
}