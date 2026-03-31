package com.visitearcoverde.repository;

import com.visitearcoverde.model.Atracao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AtracaoRepository extends JpaRepository<Atracao, Long> {

    List<Atracao> findByCategoriaId(Long categoriaId);

    List<Atracao> findByNomeContainingIgnoreCase(String nome);

    @Query(value = "SELECT * FROM atracoes a WHERE " +
                   "(6371 * acos(cos(radians(:lat)) * cos(radians(a.latitude)) * " +
                   "cos(radians(a.longitude) - radians(:lng)) + " +
                   "sin(radians(:lat)) * sin(radians(a.latitude)))) < :raioKm", 
           nativeQuery = true)
    List<Atracao> findAtracoesProximas(@Param("lat") Double lat,
                                       @Param("lng") Double lng,
                                       @Param("raioKm") Double raioKm);
}