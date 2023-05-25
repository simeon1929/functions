console.log('Javascript working');
function normalFun (argument1, argument2) {
    console.log('Basic function');
    console.log(argument1);
    console.log(argument2);
}
normalFun('Argument One added', 'Argument Two added')


let addNum = ((value)=>{
    let x = 10
    let y = 20
    let sum = x + y 
    console.log(sum);
    value(sum)
})
addNum((sum)=>{
    console.log('sum value is' , sum + sum);
})




// Fool programs 

console.log('Function fool programs');

let functonfool = ((foolTakeArg)=>{
    //console.log(fooldataTaken);

    let foolName = 'Hus name is Simeon '
    let wifeName = 'Beulah Simeon'
    let reuslt = foolName + 'wife name is ' + wifeName
    console.log(reuslt);
    foolTakeArg(reuslt)
   // fooldataTaken(wifeName)

})
functonfool((foolTakeArg)=>{
    console.log('Get second output', foolTakeArg);
})

//let foolReuslt = functonfool('I am great and fool')



// let resultFool = functonfool('Simeon Fool')
// console.log(resultFool);


let mainFun = ((arg1, arg2)=>{
    console.log('Arg-1', arg1, 'Arg-2' , arg2);

    let age = 20
    let name = 'Simeon'
    arg1(age)
    console.log('First loop age', age);
})
mainFun((arg1)=>{
    console.log('second age', arg1);
})


const names = ['Simeon', 'Beulah',]
const desigination = ['Father', 'Mother',]
const familyMen = document.querySelector('.familyMem')
//let html = ' '

// names.forEach(elem =>{
//     familyMen.innerHTML +=  `<p> ${elem}</p>`
// })




let callBack = ((mainVal)=>{
    names.forEach(elem =>{
        let result = elem
        //console.log(result);
        mainVal(result)
    })

    
})

callBack((mainVal)=>{
    
    // desigination.forEach(elemNames=>{
    //     console.log(elemNames + ' '+ mainVal);
    // })
    console.log('Name', mainVal);

})


var list = [
    {name: "Bob", age: 10}, 
    {name: "Tom", age: 20},
    {name: "Larry", age: 30}
];

//sort_by_property(list, ["name", "age"]);


list.forEach(nameElem=>{
    console.log(`${'Name : '+ nameElem.name } ----- ${'Age : '+ nameElem.age} `);
    if(nameElem.age > 20) {
        console.log('20+ ', nameElem.name);
    }
})




var names1 = ["Bob","Tom","Larry"];
var ages1 =  ["10", "20", "30"];

//1) combine the arrays:
var list2 = [];
for (var j = 0; j < names1.length; j++) 
    console.log('Loop Working', j[0]);
    list2.push({'name': names1[j]}
);




//2) sort:
list.sort(function(a, b) {
    return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age 
    // if the name is the same. See Bonus section below
});

//3) separate them back out:
for (var k = 0; k < list.length; k++) {
    names1[k] = list[k].name;
    ages1[k] = list[k].age;
}

let nameVal;
// Button value 
// document.getElementById('nameRes').onclick = ()=>{
//     nameVal = document.getElementById('nameDisp').value
    

//     document.getElementById('nameOut').innerText = nameVal

//     //console.log(name);
    
// }

// console.log('On key press');

function pressfun(){
    var edValue = document.getElementById("onchangeBox").value;
    document.getElementById('onchangeText').innerText = edValue
}

document.getElementById('testTwo').addEventListener('keypress', (e)=>{
    console.log(e);
})

let number = 0

document.getElementById('add').onclick = ()=>{
    number +=1
    document.getElementById('outputOper').innerHTML = number
 
}

document.getElementById('reset').onclick = ()=>{
    number = 0
    document.getElementById('outputOper').innerHTML = number
}

document.getElementById('minus').onclick = ()=>{
    number -= 1
    document.getElementById('outputOper').innerHTML = number
}





