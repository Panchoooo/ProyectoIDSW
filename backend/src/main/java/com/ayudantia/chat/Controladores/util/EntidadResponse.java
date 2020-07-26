package com.ayudantia.chat.Controladores.util;

public class EntidadResponse{
    private long id;
    private String nombre;


    public EntidadResponse() {
    }

    public EntidadResponse(long id , String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }
}