package com.visitearcoverde.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtService {

    
    private static final String SECRET_KEY = "sua_chave_super_secreta_muito_longa_para_garantir_a_seguranca_do_jwt_arcoverde";

    public String extrairEmail(String token) {
        return extrairTodasClaims(token).getSubject();
    }

    public String gerarToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24 horas
                .signWith(getChaveAssinatura(), SignatureAlgorithm.HS256)
                .compact();
    }

    public boolean isTokenValido(String token, String email) {
        final String emailDoToken = extrairEmail(token);
        return (emailDoToken.equals(email)) && !isTokenExpirado(token);
    }

    private boolean isTokenExpirado(String token) {
        return extrairTodasClaims(token).getExpiration().before(new Date());
    }

    private Claims extrairTodasClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getChaveAssinatura())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getChaveAssinatura() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}