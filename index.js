const input = document.getElementById("todo-input")
const submitButton = document.getElementById("submit-button")
const xButton = document.querySelector(".x-button")
const taskContainer = document.querySelector(".task-container")
const task = document.querySelector(".task")
let array = []

submitButton.addEventListener("click", getValue)

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
     getValue()
    }
})




function getValue(){

    if (input.value === ""){
        return
    } else{
        array.push(input.value)
        input.value = ""
        const li = document.createElement("li")
        let lastElement = array[array.length - 1]
        li.innerText = lastElement
        li.classList.add("task")
        li.style.paddingTop = "10px"
        li.style.paddingBottom = "10px"
        li.style.display = "flex"
        li.style.justifyContent = "space-between"
       const newXButton = document.createElement("button")
       newXButton.classList.add = "x-button"
       newXButton.innerText = "X"
       newXButton.style.width = "25px"
       newXButton.style.height = "25px"
       li.append(newXButton)
        taskContainer.append(li) 
        newXButton.addEventListener("click", remove)
       

        function remove(){
         li.remove()
         xButton.innerText = ""
         let text =  li.innerText
         text = text.slice(0, -1)


            if (array.includes(text)){
             array.filter(item => item !== text)
        }
    }
    
  
}
}

