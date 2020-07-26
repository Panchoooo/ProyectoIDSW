package com.ayudantia.chat.Modelos;

import java.sql.Timestamp;
import java.util.Objects;

import javax.persistence.*;

// Tabla para solicitudes
@Entity
@Table(name = "solicitudes")
public class Solicitud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long medico;
    private Long gestor;
    private Long enfermere;

    private String estado;

    private Timestamp fecha_creacion;
    private Timestamp fecha_gestion;
    private Timestamp fecha_check;
    private Timestamp fecha_alta;

    private Long id_Pab;

    private String rut_paciente;

 

    public Solicitud() {
    }
    public Solicitud(Long medico ,String rut_paciente) {
        this.medico = medico;
        this.rut_paciente = rut_paciente;
        this.estado = "Pendiente";
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		this.fecha_creacion = timestamp;
    }  

    public Solicitud(Long id, Long medico, Long gestor, Long enfermere, String estado, Timestamp fecha_creacion, Timestamp fecha_gestion, Timestamp fecha_check, Timestamp fecha_alta, Long id_Pab, String rut_paciente) {
        this.id = id;
        this.medico = medico;
        this.gestor = gestor;
        this.enfermere = enfermere;
        this.estado = estado;
        this.fecha_creacion = fecha_creacion;
        this.fecha_gestion = fecha_gestion;
        this.fecha_check = fecha_check;
        this.fecha_alta = fecha_alta;
        this.id_Pab = id_Pab;
        this.rut_paciente = rut_paciente;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Solicitud)) {
            return false;
        }
        Solicitud solicitud = (Solicitud) o;
        return Objects.equals(id, solicitud.id) && Objects.equals(medico, solicitud.medico) && Objects.equals(gestor, solicitud.gestor) && Objects.equals(enfermere, solicitud.enfermere) && Objects.equals(estado, solicitud.estado) && Objects.equals(fecha_creacion, solicitud.fecha_creacion) && Objects.equals(fecha_gestion, solicitud.fecha_gestion) && Objects.equals(fecha_check, solicitud.fecha_check) && Objects.equals(id_Pab, solicitud.id_Pab) && Objects.equals(rut_paciente, solicitud.rut_paciente);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, medico, gestor, enfermere, estado, fecha_creacion, fecha_gestion, fecha_check, id_Pab, rut_paciente);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", medico='" + getmedico() + "'" +
            ", gestor='" + getgestor() + "'" +
            ", enfermere='" + getenfermere() + "'" +
            ", estado='" + getEstado() + "'" +
            ", fecha_creacion='" + getFecha_creacion() + "'" +
            ", fecha_gestion='" + getFecha_gestion() + "'" +
            ", fecha_check='" + getFecha_check() + "'" +
            ", id_Pab='" + getId_Pab() + "'" +
            ", rut_paciente='" + getRut_paciente() + "'" +
            "}";
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getmedico() {
        return this.medico;
    }

    public void setmedico(Long medico) {
        this.medico = medico;
    }

    public Long getgestor() {
        return this.gestor;
    }

    public void setgestor(Long gestor) {
        this.gestor = gestor;
    }

    public Long getenfermere() {
        return this.enfermere;
    }

    public void setenfermere(Long enfermere) {
        this.enfermere = enfermere;
    }

    public String getEstado() {
        return this.estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Timestamp getFecha_creacion() {
        return this.fecha_creacion;
    }

    public void setFecha_creacion(Timestamp fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public Timestamp getFecha_gestion() {
        return this.fecha_gestion;
    }

    public void setFecha_gestion(Timestamp fecha_gestion) {
        this.fecha_gestion = fecha_gestion;
    }

    public Timestamp getFecha_check() {
        return this.fecha_check;
    }

    public void setFecha_check(Timestamp fecha_check) {
        this.fecha_check = fecha_check;
    }

    public Timestamp getFecha_alta() {
        return this.fecha_alta;
    }

    public void setFecha_alta(Timestamp fecha_alta) {
        this.fecha_alta = fecha_alta;
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