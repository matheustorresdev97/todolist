package com.matheustorres.todolist.exceptions;

public class TaskCreationException extends RuntimeException {
    public TaskCreationException(String message) {
        super(message);
    }
}
