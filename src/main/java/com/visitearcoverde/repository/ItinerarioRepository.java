package com.visitearcoverde.repository;

import com.visitearcoverde.model.Itinerario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItinerarioRepository extends JpaRepository<Itinerario, Long> {
    

    List<Itinerario> findByUsuarioId(Long usuarioId);
}