console.log('Functions');

// simple fuctions
function test(wifename, age){
    console.log(`Hello simeon and your wife name is ', ${wifename} , your age is ${age} `);
}
test('beulah', 35)

let simeon = [77, 41, 65, 22, 80, 70]
let beulah = [90, 55, 15, 20, 30 , 100]

function marks (subjets){
    
    
    subjets.forEach(element => {
        console.log(element);
    });
}

marks(simeon)

// function type 2
let detailsSimeon = [1989, 'String']
let age = (year, month)=> {
    console.log(`Date of birth Year ${year} and month is ${month}`);
}

age(detailsSimeon)












