package com.matheustorres.todolist.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matheustorres.todolist.dtos.TaskRequestDTO;
import com.matheustorres.todolist.dtos.TaskResponseDTO;
import com.matheustorres.todolist.dtos.TaskStatusUpdateDTO;
import com.matheustorres.todolist.exceptions.TaskNotFoundException;
import com.matheustorres.todolist.models.TaskModel;
import com.matheustorres.todolist.repositories.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public TaskResponseDTO createTask(TaskRequestDTO dto) {
        TaskModel task = new TaskModel();
        task.setDescription(dto.description());
        task.setComplete(dto.complete());

        TaskModel savedTask = taskRepository.save(task);
        return convertToDTO(savedTask);
    }

    public List<TaskResponseDTO> getAllTasks() {
        List<TaskModel> tasks = taskRepository.findAll();
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public TaskResponseDTO updateTaskStatus(UUID id, TaskStatusUpdateDTO dto) {
        TaskModel task = taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Tarefa não encontrada com ID: " + id));

        task.setComplete(dto.complete());

        if (dto.complete() && task.getCompletedAt() == null) {
            task.setCompletedAt(LocalDateTime.now());
        } else if (!dto.complete()) {
            task.setCompletedAt(null);
        }

        TaskModel updatedTask = taskRepository.save(task);
        return convertToDTO(updatedTask);
    }

    public void deleteTask(UUID id) {
        if (!taskRepository.existsById(id)) {
            throw new TaskNotFoundException("Tarefa não encontrada com ID: " + id);
        }

        taskRepository.deleteById(id);
    }

    private TaskResponseDTO convertToDTO(TaskModel task) {
        return new TaskResponseDTO(
                task.getId(),
                task.getDescription(),
                task.isComplete(),
                task.getCreatedAt(),
                task.getCompletedAt());
    }
}