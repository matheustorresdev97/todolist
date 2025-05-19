package com.matheustorres.todolist.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matheustorres.todolist.models.TaskModel;

public interface TaskRepository extends JpaRepository<TaskModel, UUID> {

}
