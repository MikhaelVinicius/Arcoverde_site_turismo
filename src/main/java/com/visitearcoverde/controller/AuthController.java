package com.visitearcoverde.controller;

import com.visitearcoverde.model.Usuario;
import com.visitearcoverde.repository.UsuarioRepository;
import com.visitearcoverde.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;

    public AuthController(UsuarioRepository usuarioRepository, JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }


    public static class LoginRequest {
        public String email;
        public String senha;
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(request.email);

        // Verificação simplificada. Em produção, use PasswordEncoder do Spring Security (BCrypt)
        if (usuario.isPresent() && usuario.get().getSenha().equals(request.senha)) {
            String token = jwtService.gerarToken(usuario.get().getEmail());
            return ResponseEntity.ok(token);
        }

        return ResponseEntity.status(401).body("Credenciais inválidas");
    }
}