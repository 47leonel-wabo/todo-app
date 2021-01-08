import axios from "axios";

class HelloService {
    executeHello(){
        return axios.get("http://localhost:8080/hello")
    }
}

export default new HelloService()
