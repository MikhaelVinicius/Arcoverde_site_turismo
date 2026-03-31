package com.visitearcoverde.controller;

import com.visitearcoverde.model.Usuario;
import com.visitearcoverde.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") 
public class UsuarioController {

    private final UsuarioService service;

    @Autowired
    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(service.salvar(usuario));
    }
}
