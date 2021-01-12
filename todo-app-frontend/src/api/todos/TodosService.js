import axios from "axios"

const BASE_URL = `http://localhost:8080/todo-api`

class TodosService {
    async fetchAllTodos() {
        return axios.get(BASE_URL)
    }

    async fetchTodosByUsername(username) {
        return axios.get(`${BASE_URL}/${username}/todos`)
    }

    async removeTodo(username, todoId) {
        return axios.delete(`${BASE_URL}/${username}/todos/${todoId}`)
    }

    async getSpecificTodoByUserAndId(username, todoId) {
        return axios.get(`${BASE_URL}/${username}/todos/${todoId}`)
    }

    async updateTodo(username, todo) {
        console.log('UPDATE TODO...')
        console.log(todo)
        //return axios.put(`${BASE_URL}/${username}/todos`, todo)
    }

    async createTodo(username, todo){
        return axios.post(`${BASE_URL}/${username}/todos`, todo)
    }
}

export default new TodosService()
