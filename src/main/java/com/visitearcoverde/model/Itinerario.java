package com.visitearcoverde.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "itinerarios")
public class Itinerario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    // Relação N:N mapeando a tabela associativa itinerario_atracao
    @ManyToMany
    @JoinTable(
        name = "itinerario_atracao",
        joinColumns = @JoinColumn(name = "itinerario_id"),
        inverseJoinColumns = @JoinColumn(name = "atracao_id")
    )
    private Set<Atracao> atracoes = new HashSet<>();
}