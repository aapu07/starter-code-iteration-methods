// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //

    if(typeof object === object){
        object.forEach( juser => {
            let newDiv = document.createElement('div')
            newDiv.className = "user"
            for( key in user){
                let newPropertyDiv = document.createElement('div')
                newPropertyDiv.className = "property"
                newPropertyDiv.append(key + " :", user [key])
                newDiv.append(newPropertyDiv)
            }
            detailsElement.append(newDiv)
        })
    }
    // http://mdn.io/json.stringify
   const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
//KATA 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1)

console.log(greenEyes1)

//KATA 1

let isActive = users.filter(user => user.isActive === true)
printKata(1, isActive)

console.log(isActive)

//KATA 2

let usersEmail = users.map(user => user.email)
printKata(2, usersEmail)

console.log(usersEmail)

//KATA 3

let companyName = users.some(user => user.company === "OVATION")
printKata(3, companyName)

console.log(companyName)

//KATA 4

let ageOf38 = users.find(user => user.age > 38)
printKata(4, ageOf38)

console.log(ageOf38)

//KATA 5

let active38 = users.filter(user => user.isActive === true).find(user => user.age > 38)
printKata(5, active38)

console.log(active38)

//KATA 6

let userZenco = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, userZenco)

console.log(userZenco)


//KATA 7

let userAge = users.filter(user => user.tags .includes("fugiat")) .map( user => user.age )
printKata (7, userAge)
console.log(userAge)