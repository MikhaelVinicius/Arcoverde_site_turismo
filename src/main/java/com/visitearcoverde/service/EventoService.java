package com.visitearcoverde.service;

import com.visitearcoverde.model.Evento;
import com.visitearcoverde.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventoService {

    private final EventoRepository repository;

    @Autowired
    public EventoService(EventoRepository repository) {
        this.repository = repository;
    }

    public List<Evento> listarTodos() {
        return repository.findAll();
    }

    public List<Evento> buscarPorCategoria(Long categoriaId) {
        return repository.findByCategoriaId(categoriaId);
    }

    public Evento salvar(Evento evento) {
        return repository.save(evento);
    }
}