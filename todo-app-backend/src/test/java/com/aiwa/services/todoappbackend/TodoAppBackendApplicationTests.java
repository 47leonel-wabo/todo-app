package com.aiwa.services.todoappbackend;

import com.aiwa.services.todoappbackend.model.TodoModel;
import com.aiwa.services.todoappbackend.services.TodoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TodoAppBackendApplicationTests {

    private final TodoService todoService;

    @Autowired
    public TodoAppBackendApplicationTests(TodoService todoService) {
        this.todoService = todoService;
    }

    @Test
    void deleteTodoTest() {
        todoService.deleteTodo(1L);
        System.out.println(todoService.findAll().size());
    }

}
