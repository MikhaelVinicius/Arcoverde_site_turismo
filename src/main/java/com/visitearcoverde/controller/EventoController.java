package com.visitearcoverde.controller;

import com.visitearcoverde.model.Evento;
import com.visitearcoverde.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "*") 
public class EventoController {

    private final EventoService service;

    @Autowired
    public EventoController(EventoService service) {
        this.service = service;
    }

    
    @GetMapping
    public ResponseEntity<List<Evento>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    
    @GetMapping("/categoria/{id}")
    public ResponseEntity<List<Evento>> buscarPorCategoria(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorCategoria(id));
    }

   
    @PostMapping("/admin")
    public ResponseEntity<Evento> criarEvento(@RequestBody Evento evento) {
        return ResponseEntity.ok(service.salvar(evento));
    }
}