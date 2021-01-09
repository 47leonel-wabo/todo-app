package com.aiwa.services.todoappbackend.services;

import com.aiwa.services.todoappbackend.model.TodoModel;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TodoService {
    private static final List<TodoModel> todoList = new ArrayList<>();
    private static final AtomicLong index = new AtomicLong();

    static {
        todoList.add(new TodoModel(index.incrementAndGet(), "leo ka", "Learn React Js", "Time to be a full-stack Engineer", LocalDateTime.now(), false));
        todoList.add(new TodoModel(index.incrementAndGet(), "leo ka", "Learn Vue3 and Spring Boot", "Time to be a full-stack Engineer", LocalDateTime.now(), false));
        todoList.add(new TodoModel(index.incrementAndGet(), "leo ka", "Learn Processing (Digital Art)", "Make beautiful awesome graphic", LocalDateTime.now(), false));
    }

    public List<TodoModel> findAll() {
        return todoList;
    }

    public boolean deleteTodo(Long id) {
        var todo = todoList.stream().filter(todoModel -> todoModel.getId().equals(id)).findFirst().orElse(null);
        if (todo != null)
            return todoList.remove(todo);
        return false;
    }
}
