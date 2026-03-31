package com.visitearcoverde.service;

import com.visitearcoverde.model.Atracao;
import com.visitearcoverde.model.Itinerario;
import com.visitearcoverde.repository.AtracaoRepository;
import com.visitearcoverde.repository.ItinerarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItinerarioService {

    private final ItinerarioRepository itinerarioRepository;
    private final AtracaoRepository atracaoRepository;

    @Autowired
    public ItinerarioService(ItinerarioRepository itinerarioRepository, AtracaoRepository atracaoRepository) {
        this.itinerarioRepository = itinerarioRepository;
        this.atracaoRepository = atracaoRepository;
    }

    public List<Itinerario> buscarPorUsuario(Long usuarioId) {
        return itinerarioRepository.findByUsuarioId(usuarioId);
    }

    public Itinerario adicionarAtracao(Long itinerarioId, Long atracaoId) {
        Itinerario itinerario = itinerarioRepository.findById(itinerarioId)
                .orElseThrow(() -> new RuntimeException("Itinerário não encontrado"));
        
        Atracao atracao = atracaoRepository.findById(atracaoId)
                .orElseThrow(() -> new RuntimeException("Atração não encontrada"));

        
        itinerario.getAtracoes().add(atracao);
        return itinerarioRepository.save(itinerario);
    }
}