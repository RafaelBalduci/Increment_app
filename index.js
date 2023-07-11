//let saveEl = document.getElementById("save-el")
//let countEl = document.getElementById("count-el")
//let count = 0//
//function increment() {
//    count += 1
//    countEl.textContent = count
//}//
//function save() {
//    let countStr = count + " - "
//    saveEl.textContent += countStr
//}

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let countClick = 0
let count2 = 0

function increment() {
    count += 1
    count2 += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let dash = " - "
    // 3. Render the variable in the saveEl using innerText
    if (countClick==0) {
        saveEl.innerText += " " + count
    }
    else {
        saveEl.innerText += dash + count2 
    }
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    countClick += 1
    countEl.innerText = 0
    count = 0
}
