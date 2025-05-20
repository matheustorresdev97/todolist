package com.matheustorres.todolist.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record TaskResponseDTO(
        UUID id,
        String description,
        boolean complete,
        LocalDateTime createdAt,
        LocalDateTime completedAt) {
}
