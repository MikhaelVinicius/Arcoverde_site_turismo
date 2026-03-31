package com.visitearcoverde.service;

import com.visitearcoverde.model.Usuario;
import com.visitearcoverde.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    @Autowired
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Optional<Usuario> buscarPorEmail(String email) {
        return repository.findByEmail(email);
    }

    public Usuario salvar(Usuario usuario) {
        // Dica: Futuramente, a senha será criptografada aqui antes do save()
        return repository.save(usuario);
    }
}