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
}

export default new TodosService()
