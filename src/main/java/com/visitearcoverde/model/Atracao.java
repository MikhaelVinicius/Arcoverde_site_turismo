package com.visitearcoverde.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "atracoes")
public class Atracao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String descricao;

    private Double latitude;
    
    private Double longitude;
    
    private String imagemUrl;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
}