package com.matheustorres.todolist.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.matheustorres.todolist.dtos.TaskRequestDTO;
import com.matheustorres.todolist.dtos.TaskResponseDTO;
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

    private TaskResponseDTO convertToDTO(TaskModel task) {
        return new TaskResponseDTO(
            task.getId(),
            task.getDescription(),
            task.isComplete(),
            task.getCreatedAt(),
            task.getCompletedAt()
        );
    }
}