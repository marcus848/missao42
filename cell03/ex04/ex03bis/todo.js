const btNewToDo = $(".nav button")
const containerToDo = $("#ft_list")
const listToDo = $("#ft_list div")

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
    var tasks = [];
    $("#ft_list div").each(function() {
        tasks.push($(this).find('p').text());
    });

    criarCookie('tasks', JSON.stringify(tasks))
}

function carregarToDos() {
    console.log("==========Carregar ToDos==============")
    var tasks = lerCookie('tasks')
    if(tasks) {
        tasks = JSON.parse(tasks)
        console.log("Parse: ", tasks)
        tasks.forEach(task => {
            // const newItem = document.createElement("div");
            // const newItemText = document.createElement("p");

            const newItem = $("<div />")
            const newItemText = $("<p />")

            newItemText.text(task)

            newItem.append(newItemText);

            newItem.on("click", () => removeToDo(newItem));

            $("#ft_list").append(newItem);
        })
    }
}


function addNewToDo(newToDo) {
    if (newToDo === "") {
        alert("Nenhuma atividade reconhecida :(")

    } else if (newToDo) {

        const newItem = $("<div />")
        const newItemText = $("<p />")

        newItemText.text(newToDo)

        newItem.append(newItemText);

        newItem.on("click", () => removeToDo(newItem));


        var firstChildren = $("#ft_list").children().first();
        if (firstChildren) {
            newItem.insertBefore(firstChildren)
        } else {
            $("#ft_list").append(newItem)
        }
        // containerToDo.insertBefore(newItem, firstChildren)

        saveToDo()
    }
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
}

window.onload = function () {
    carregarToDos()
}


listToDo.each(() => {
    $(this).on("click", () => removeToDo($(this)))
})

btNewToDo.on("click", () => addNewToDo(prompt("Nova Atividade:")))