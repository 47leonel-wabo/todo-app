package com.aiwa.services.todoappbackend.controllers;

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
}
