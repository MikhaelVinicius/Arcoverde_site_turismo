package com.visitearcoverde.controller;

import com.visitearcoverde.model.Itinerario;
import com.visitearcoverde.service.ItinerarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/itinerarios")
@CrossOrigin(origins = "*") 
public class ItinerarioController {

    private final ItinerarioService service;

    @Autowired
    public ItinerarioController(ItinerarioService service) {
        this.service = service;
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Itinerario>> listarPorUsuario(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(service.buscarPorUsuario(usuarioId));
    }

   
    @PostMapping("/adicionar/{atracaoId}")
    public ResponseEntity<?> adicionarAtracaoAoRoteiro(
            @PathVariable Long atracaoId,
            @RequestParam Long itinerarioId) { 
        try {
            Itinerario atualizado = service.adicionarAtracao(itinerarioId, atracaoId);
            return ResponseEntity.ok(atualizado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}