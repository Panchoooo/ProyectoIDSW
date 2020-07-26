package com.ayudantia.chat.Repositorios;


import java.util.List;

import com.ayudantia.chat.Modelos.Solicitud;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("SolicitudRepositorio")
public interface SolicitudRepository extends JpaRepository<Solicitud, Long> {

    public abstract Solicitud findById(long id);
    public abstract List<Solicitud> findAllByOrderByIdDesc();
    public abstract List<Solicitud> findByMedicoOrGestorOrEnfermere(long medico,long gestor , long enfermere);

    public abstract List<Solicitud> findByEstado(String estado);
    public abstract List<Solicitud> findByMedicoAndEstado(long medico,String estado);
    public abstract List<Solicitud> findByGestorAndEstado(long gestor,String estado);
    public abstract List<Solicitud> findByEnfermereAndEstado(long enfermere,String estado);
}
