package com.visitearcoverde.controller;

import com.visitearcoverde.model.Atracao;
import com.visitearcoverde.service.AtracaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/atracoes")
@CrossOrigin(origins = "*")
public class AtracaoController {

    private final AtracaoService service;

    @Autowired
    public AtracaoController(AtracaoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Atracao>> listarTodas() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @GetMapping("/categoria/{id}")
    public ResponseEntity<List<Atracao>> buscarPorCategoria(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorCategoria(id));
    }

    @GetMapping("/proximidade")
    public ResponseEntity<List<Atracao>> buscarProximas(
            @RequestParam Double lat,
            @RequestParam Double lng,
            @RequestParam(defaultValue = "5.0") Double raioKm) {
    
        return ResponseEntity.ok(service.buscarPorProximidade(lat, lng, raioKm));
    }
}