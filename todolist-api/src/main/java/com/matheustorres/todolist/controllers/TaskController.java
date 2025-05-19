package com.matheustorres.todolist.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.matheustorres.todolist.dtos.TaskRequestDTO;
import com.matheustorres.todolist.dtos.TaskResponseDTO;
import com.matheustorres.todolist.exceptions.TaskCreationException;
import com.matheustorres.todolist.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskResponseDTO> createTask(@Valid @RequestBody TaskRequestDTO taskRequestDTO) {
        try {
            TaskResponseDTO createdTask = taskService.createTask(taskRequestDTO);

            URI location = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}")
                    .buildAndExpand(createdTask.id())
                    .toUri();

            return ResponseEntity.created(location).body(createdTask);
        } catch (Exception e) {
            throw new TaskCreationException("Não foi possivel criar a tarefa");
        }
    }
}
