package com.visitearcoverde.service;

import com.visitearcoverde.model.Atracao;
import com.visitearcoverde.repository.AtracaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtracaoService {

    private final AtracaoRepository repository;

    // Injeção de Dependência via Construtor (Recomendado)
    @Autowired
    public AtracaoService(AtracaoRepository repository) {
        this.repository = repository;
    }

    public List<Atracao> listarTodas() {
        return repository.findAll();
    }

    public List<Atracao> buscarPorCategoria(Long categoriaId) {
        return repository.findByCategoriaId(categoriaId);
    }

    // Filtro inteligente: Proximidade
    public List<Atracao> buscarPorProximidade(Double lat, Double lng, Double raioKm) {
       
        return repository.findAtracoesProximas(lat, lng, raioKm);
    }
}