package com.matheustorres.todolist.dtos;

import jakarta.validation.constraints.NotNull;

public record TaskStatusUpdateDTO(
    @NotNull(message = "O status de conclusão é obrigatório")
    boolean complete
) {}