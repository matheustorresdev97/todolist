package com.matheustorres.todolist.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record TaskRequestDTO(
    @NotBlank(message = "A descrição da tarefa é obrigatória")
    @Size(min = 1, max = 100, message = "A descrição deve ter entre 1 e 100 caracteres")
    String description,
    
    @NotNull(message = "O status de conclusão é obrigatório")
    boolean  complete 
) {}
