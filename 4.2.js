const obj = {
    id: 2,
    name: "user",
    phone: 1234,
}

function isKey(str, obj){
    if(obj.hasOwnProperty(str)){
        return true
    }
    return false
}

const answer = isKey('name', obj)
console.log(answer)