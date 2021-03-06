package com.ayudantia.chat.Modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "pabellon")
public class Pabellon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pabellon;

    private String estado;

    private long tipo;


    public Pabellon() {
    }

    public Pabellon(Long id, String pabellon, String estado, long tipo) {
        this.id = id;
        this.pabellon = pabellon;
        this.estado = estado;
        this.tipo = tipo;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPabellon() {
        return this.pabellon;
    }

    public void setPabellon(String pabellon) {
        this.pabellon = pabellon;
    }

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public long getTipo() {
        return this.tipo;
    }

    public void setTipo(long tipo) {
        this.tipo = tipo;
    }

}