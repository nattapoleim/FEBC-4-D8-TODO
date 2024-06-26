const todos = [
  { id: '46442146', text: '🤏🏻 ไปจีบเธอต่อ' },
  { id: '33271224', text: '🧑🏻‍💻 เรียนเขียนเว็บไซต์' },
]
const randomId = () => Math.floor(Math.random() * 100213123)

const addTodo = e => {
  e.preventDefault()
  let newTodo = {}
  if (todoText.value !== '') {
    newTodo = { id: randomId(), text: todoText.value }
    console.log(newTodo)
    todos.push(newTodo)
  } else {
    console.log('กรุณากรอกข้อมูล')
  }
  todoText.value = ''
  renderList()
}

const renderList = () => {
  todoList.innerHTML = ''
  todos.map(todo => {
    todoList.innerHTML += `
          <li class="todo" id=${todo.id}>
            <div class="todoText">${todo.text}</div>
            <button class="delButton" onclick="deleteTodo(${todo.id})">ลบ</button>
          </li>
          `
  })
}

const deleteTodo = id => {
  let index = todos.findIndex(todo => todo.id == id)
  todos.splice(index, 1)
  renderList()
}

renderList()
