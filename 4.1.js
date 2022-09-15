const obj = {
    id: 2,
    name: "user",
    phone: 1234,
}

function funcGetKey (obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log('Ключ ' + key + ': значение ' + obj[key])
        }
    }
}

funcGetKey(obj)
