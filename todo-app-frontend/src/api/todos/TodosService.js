import axios from "axios"

const BASE_URL = "http://localhost:8080/todos"

class TodosService {
    async fetchAllTodos(){
        return axios.get(BASE_URL)
    }

    async fetchTodosByUsername(username){
         return axios.get(`http://localhost:8080/todo-api/${username}/todos`)
    }
}

export default new TodosService()
