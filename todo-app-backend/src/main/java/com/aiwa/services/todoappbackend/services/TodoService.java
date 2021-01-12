package com.aiwa.services.todoappbackend.services;

import com.aiwa.services.todoappbackend.model.TodoModel;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TodoService {
    private static final List<TodoModel> todoList = new ArrayList<>();
    private static final AtomicLong index = new AtomicLong();

    static {
        todoList.add(new TodoModel(index.incrementAndGet(),
                "leo ka",
                "Learn React Js",
                "Time to be a full-stack Engineer",
                new Date(),
                false));
        todoList.add(new TodoModel(index.incrementAndGet(),
                "leo ka",
                "Learn Vue3 and Spring Boot",
                "Time to be a full-stack Engineer",
                new Date(),
                false));
        todoList.add(new TodoModel(index.incrementAndGet(),
                "leo ka",
                "Learn Processing (Digital Art)",
                "Make beautiful awesome graphic",
                new Date(),
                false));
    }

    public List<TodoModel> findAll() {
        return todoList;
    }

    public boolean deleteTodo(Long id) {
        var todo = todoList
                .stream()
                .filter(todoModel -> todoModel.getId().equals(id))
                .findFirst()
                .orElse(null);

        if (todo != null)
            return todoList.remove(todo);
        return false;
    }

    public TodoModel addTodo(TodoModel todoModel) {
        todoModel.setId(index.incrementAndGet());
        todoList.add(todoModel);
        return todoModel;
    }

    public TodoModel findTodoById(Long todoId) {
        return todoList
                .stream()
                .filter(todoModel -> todoModel.getId().equals(todoId))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Todo element with id " + todoId + " not found"));
    }

    public TodoModel updateTodo(TodoModel todoModel) {
        /*
        We first remove the old one before replacing it
        Otherwise it will inserted as a new one
         */
        var resp = deleteTodo(todoModel.getId());
        if (resp) {
            todoList.add(todoModel);
            return todoModel;
        } else {
            return addTodo(todoModel);
        }
    }
}
