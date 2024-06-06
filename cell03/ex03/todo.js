const btNewToDo = document.querySelector(".nav button")
const containerToDo = document.querySelector("#ft_list")
const listToDo = document.querySelectorAll("#ft_list div")

function addNewToDo() {

    let newToDO = prompt("Nova Atividade:")

    if (newToDO === "") {
        alert("Nenhuma atividade reconhecida :(")


    } else if (newToDO !== "" && newToDO !== null) {

        const newItem = document.createElement("div")
        const newItemText = document.createElement("p")

        newItemText.textContent = newToDO

        newItem.appendChild(newItemText)

        newItem.addEventListener("click", () => removeToDo(newItem))

        var firstChildren = containerToDo.children[0]
        containerToDo.insertBefore(newItem, firstChildren)
    }


}

function removeToDo(event) {

    let confirmacao = ""

    while (confirmacao === "" || (confirmacao !== "Sim" && confirmacao !== "Não") && confirmacao !== null) {
        confirmacao = prompt("Deseja excluir a atividade?\nSim - Não", "Sim")
    }

    if (confirmacao === "Sim") {

        event.remove();
    }


}

listToDo.forEach((e) => {
    e.addEventListener("click", () => removeToDo(e))
})

btNewToDo.addEventListener("click", addNewToDo)
