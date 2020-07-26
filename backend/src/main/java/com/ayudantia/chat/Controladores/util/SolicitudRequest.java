package com.ayudantia.chat.Controladores.util;

import java.sql.Date;

public class SolicitudRequest {

    private Long id;

    private Long medico;
    private Long gestor;
    private Long enfermere;

    private String estado;

    private Date fecha_creacion;
    private Date fecha_gestion;
    private Date fecha_check;

    private Long id_Pab; // P mayus...

    private String rut_paciente;


    public SolicitudRequest() {
    }

    public SolicitudRequest(long id) {
        this.id=id;
    }

    public SolicitudRequest(Long id, Long medico, Long gestor, Long enfermere, String estado, Date fecha_creacion, Date fecha_gestion, Date fecha_check, Long id_Pab, String rut_paciente) {
        this.id = id;
        this.medico = medico;
        this.gestor = gestor;
        this.enfermere = enfermere;
        this.estado = estado;
        this.fecha_creacion = fecha_creacion;
        this.fecha_gestion = fecha_gestion;
        this.fecha_check = fecha_check;
        this.id_Pab = id_Pab;
        this.rut_paciente = rut_paciente;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getMedico() {
        return this.medico;
    }

    public void setMedico(Long medico) {
        this.medico = medico;
    }

    public Long getGestor() {
        return this.gestor;
    }

    public void setGestor(Long gestor) {
        this.gestor = gestor;
    }

    public Long getEnfermere() {
        return this.enfermere;
    }

    public void setEnfermere(Long enfermere) {
        this.enfermere = enfermere;
    }

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Date getFecha_creacion() {
        return this.fecha_creacion;
    }

    public void setFecha_creacion(Date fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public Date getFecha_gestion() {
        return this.fecha_gestion;
    }

    public void setFecha_gestion(Date fecha_gestion) {
        this.fecha_gestion = fecha_gestion;
    }

    public Date getFecha_check() {
        return this.fecha_check;
    }

    public void setFecha_check(Date fecha_check) {
        this.fecha_check = fecha_check;
    }

    public Long getId_Pab() {
        return this.id_Pab;
    }

    public void setId_Pab(Long id_Pab) {
        this.id_Pab = id_Pab;
    }

    public String getRut_paciente() {
        return this.rut_paciente;
    }

    public void setRut_paciente(String rut_paciente) {
        this.rut_paciente = rut_paciente;
    }



}