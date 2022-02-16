let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

/// Set up variable to contain the leads parsed into an array
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads()
}



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    /// Creating a localStorage with key called "myLeads" and making values strings
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
