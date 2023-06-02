const delo = [
    // {
    //     text: "первое дело",
    //     done: false
    // },

    // {
    //     text: "vroeow дело",
    //     done: false
    // },

    // {
    //     text: "чтеврето дело",
    //     done: true
    // },

    // {
    //     text: "пяток дело",
    //     done: false
    // }


]

const list = document.getElementById('list')
const button = document.getElementById('button')
const input = document.getElementById('inp')


function render(arr) {

    list.textContent = ''
    for (let i = 0; i < arr.length; i++) {
        const todo = document.createElement('div')
        const wrapper = document.createElement('div')

        todo.style.background = "grey"
        todo.style.width = "300px"
        todo.style.marginBottom = "10px"
        todo.style.color = "white"
        todo.style.padding = '5px'
        todo.textContent = arr[i].text

        const removeButton = document.createElement("button")
        removeButton.textContent = 'x'

        todo.style.display = 'flex'
        todo.style.justifyContent = 'space-between'

        removeButton.addEventListener('click', (e) => {
            remove(i)
        })

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = delo[i].done

        if (checkbox.checked) {
            console.log('ok');
            todo.style.opacity = '0.5'
        }
        if (!checkbox.checked) {
            todo.style.opacity = '1'
        }
        checkbox.addEventListener('change', () => {
            
            
            checkTodo(i)


        })


        todo.append(removeButton)
        todo.prepend(checkbox)
        list.append(todo)



    }

    return document.body.append(list)
}

// render(delo)

function remove(index) {
    delo.splice(index, 1)
    console.log(delo)
    render(delo)

}
// remove(0)

function addTodo(text) {
    delo.push({
        text: text,
        done: false
    })
    render(delo)
}
// addTodo()

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value.trim() === '') {
        return null
    }
    addTodo(input.value)
    input.value = ''


})
function checkTodo(index) {
    delo[index].done = !delo[index].done
    console.log(delo);
    render(delo)
}





