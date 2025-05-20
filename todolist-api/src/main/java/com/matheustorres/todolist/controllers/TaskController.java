package com.matheustorres.todolist.controllers;

import java.net.URI;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.matheustorres.todolist.dtos.TaskRequestDTO;
import com.matheustorres.todolist.dtos.TaskResponseDTO;
import com.matheustorres.todolist.dtos.TaskStatusUpdateDTO;
import com.matheustorres.todolist.exceptions.TaskCreationException;
import com.matheustorres.todolist.exceptions.TaskNotFoundException;
import com.matheustorres.todolist.services.TaskService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*") 
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
        } catch (IllegalArgumentException e) {
            throw new TaskCreationException(e.getMessage());
        } catch (Exception e) {
            throw new TaskCreationException("Não foi possível criar a tarefa");
        }
    }

    @GetMapping
    public ResponseEntity<List<TaskResponseDTO>> getAllTasks() {
        List<TaskResponseDTO> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> updateTaskStatus(
            @PathVariable UUID id,
            @Valid @RequestBody TaskStatusUpdateDTO statusUpdateDTO) {
        try {
            TaskResponseDTO updatedTask = taskService.updateTaskStatus(id, statusUpdateDTO);
            return ResponseEntity.ok(updatedTask);
        } catch (TaskNotFoundException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível atualizar o status da tarefa: " + e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable UUID id) {
        try {
            taskService.deleteTask(id);
            return ResponseEntity.noContent().build(); 
        } catch (TaskNotFoundException e) {
            throw e; 
        } catch (Exception e) {
            throw new RuntimeException("Não foi possível excluir a tarefa: " + e.getMessage());
        }
    }
}
