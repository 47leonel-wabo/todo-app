package com.aiwa.services.todoappbackend.controllers;

import com.aiwa.services.todoappbackend.model.TodoModel;
import com.aiwa.services.todoappbackend.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

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
    public ResponseEntity<?> createTodo(@PathVariable String username, @RequestBody TodoModel todo) {

        System.out.println(todo);

        var createdTodo = todoService.addTodo(todo);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{todoId}")
                .buildAndExpand(createdTodo.getId())
                .toUri();

        return new ResponseEntity<>(uri, HttpStatus.CREATED);
    }

    @GetMapping(path = "/{username}/todos/{todoId}")
    public ResponseEntity<?> fetchTodo(@PathVariable Long todoId) {
        return new ResponseEntity<>(todoService.findTodoById(todoId), HttpStatus.OK);
    }

    @PutMapping(path = "/{username}/todos")
    public ResponseEntity<?> updateTodo(@RequestBody TodoModel todoModel, @PathVariable String username) {
        //System.out.println(todoModel);
        return new ResponseEntity<>(todoService.updateTodo(todoModel), HttpStatus.OK);
    }
}
