const btNewToDo = document.querySelector(".nav button")
const containerToDo = document.querySelector("#ft_list")
const listToDo = document.querySelectorAll("#ft_list div")
const countTasks = document.querySelector(".count-tasks p span")

// cookies 

function criarCookie(nome, valor) {
    var dtExpire = "expires= Tue, 01 Jan 2115 12:00:00 UTC "
    document.cookie = nome + "=" + valor + "; " + dtExpire
    console.log(document.cookie)
}

function lerCookie(nome) {
    var vnome = nome + "="
    var ca = document.cookie.split(";")
    console.log("Matriz cookie: ", ca)
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(vnome) == 0) {
            // c = c.substring(vnome.length, c.length)
            // console.log("lista de tarefas cookies: ", c)
            return c.substring(vnome.length, c.length)
        }
    }
    return ""
}

function saveToDo() {
    var tasks = []
    containerToDo.querySelectorAll("div").forEach(item => {
        tasks.push(item.querySelector('p').textContent)
    })
    // console.log("antes do stringify: ", tasks)
    // const tasksString = JSON.stringify(tasks)
    // console.log("depois do stringify: ", tasksString)
    criarCookie('tasks', JSON.stringify(tasks))
}

function carregarToDos() {
    console.log("==========Carregar ToDos==============")
    var tasks = lerCookie('tasks')
    if(tasks) {
        tasks = JSON.parse(tasks)
        console.log("Parse: ", tasks)
        tasks.forEach(task => {
            const newItem = document.createElement("div");
            const newItemText = document.createElement("p");

            newItemText.textContent = task;

            newItem.appendChild(newItemText);

            newItem.addEventListener("click", () => removeToDo(newItem));

            document.querySelector("#ft_list").appendChild(newItem);
        })
    }

    countTasks.textContent = containerToDo.querySelectorAll("#ft_list div").length
}


function addNewToDo(newToDo) {
    if (newToDo === "") {
        alert("Nenhuma atividade reconhecida :(")

    } else if (newToDo) {

        const newItem = document.createElement("div")
        const newItemText = document.createElement("p")

        newItemText.textContent = newToDo
        newItem.appendChild(newItemText)
        newItem.addEventListener("click", () => removeToDo(newItem))

        var firstChildren = containerToDo.children[0]
        containerToDo.insertBefore(newItem, firstChildren)
        // containerToDo.append(newItem)

        saveToDo()
    }


    countTasks.textContent = containerToDo.querySelectorAll("#ft_list div").length
}

function removeToDo(event) {
    var confirmacao = confirm("Deseja remover a atividade?")

    // while (confirmacao === "" || (confirmacao !== "Sim" && confirmacao !== "Não") && confirmacao !== null) {
    //     confirmacao = prompt("Deseja excluir a atividade?\nSim - Não", "Sim")
    // }

    if (confirmacao) {

        event.remove();
        saveToDo();
    }
    countTasks.textContent = containerToDo.querySelectorAll("#ft_list div").length
}

window.onload = function () {
    carregarToDos()
}


listToDo.forEach((e) => {
    e.addEventListener("click", () => removeToDo(e))
})

btNewToDo.addEventListener("click", () => addNewToDo(prompt("Nova Atividade:")))