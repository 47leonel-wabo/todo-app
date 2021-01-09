package com.aiwa.services.todoappbackend.controllers;

import com.aiwa.services.todoappbackend.model.TodoModel;
import com.aiwa.services.todoappbackend.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/todo-api")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(path = "/{username}/todos")
    public ResponseEntity<?> allTodos(@PathVariable String username) {
//        System.out.println(username);
        return new ResponseEntity<>(todoService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{username}/todos/{todoId}")
    public ResponseEntity<?> removeTodo(@PathVariable String username, @PathVariable Long todoId) {

        return todoService.deleteTodo(todoId) ?
                new ResponseEntity<>("Todo removed", HttpStatus.OK) :
                new ResponseEntity<>("Todo not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping(path = "/{username}/todos")
    public ResponseEntity<?> createTodo(@PathVariable String username, @RequestBody TodoModel todoModel) {
        System.out.println(username);
        return new ResponseEntity<>(todoService.addTodo(todoModel), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{username}/todos/{todoId}")
    public ResponseEntity<?> fetchTodo(@PathVariable Long todoId){
        return new ResponseEntity<>(todoService.findTodoById(todoId), HttpStatus.OK);
    }
}
