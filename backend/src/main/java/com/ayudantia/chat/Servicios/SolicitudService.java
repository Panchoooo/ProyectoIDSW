package com.ayudantia.chat.Servicios;

import java.sql.Timestamp;
import java.util.List;

import com.ayudantia.chat.Modelos.Solicitud;
import com.ayudantia.chat.Modelos.Pabellon;
import com.ayudantia.chat.Repositorios.SolicitudRepository;
import com.ayudantia.chat.Repositorios.PabellonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SolicitudService {
    
    @Autowired
    SolicitudRepository repositorio;

    @Autowired
    PabellonRepository repositorioP;


    public boolean crear(Solicitud mensaje){
        try{
            repositorio.save(mensaje);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    public List<Solicitud> getAllById(long id){
        return repositorio.findByMedicoOrGestorOrEnfermere(id,id,id);
       
    }

    public List<Solicitud> getAllById(String estado){
        return repositorio.findByEstado(estado);
       
    }

    public Solicitud getById(long id){
        return repositorio.findById(id);
       
    }

    public List<Solicitud> getAll(){
        return repositorio.findAllByOrderByIdDesc();
       
    }
    public Boolean SolicitudEnProceso(long id_sol,long id_ges,long id_enf,long id_pab){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Solicitud sol =  repositorio.findById(id_sol);
        sol.setEstado("Esperando Paciente");
        sol.setgestor(id_ges);
        sol.setenfermere(id_enf);
        sol.setFecha_gestion(timestamp);
        sol.setId_Pab(id_pab);
        Pabellon Pab = repositorioP.findById(id_pab);
        Pab.setEstado("Ocupado");
        try{
            repositorio.save(sol);
            return true;
        } catch(Exception e){
            return false;
        }
    }
    public Boolean SolicitudEnAlta(long id_sol){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Solicitud sol =  repositorio.findById(id_sol);
        sol.setEstado("Dado de Alta");
        sol.setFecha_alta(timestamp);
        try{
            repositorio.save(sol);
            return true;
        } catch(Exception e){
            return false;
        }
    }
    public Boolean fin(long id_sol){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Solicitud sol =  repositorio.findById(id_sol);
        sol.setEstado("Listo");
        sol.setFecha_check(timestamp);
        try{
            repositorio.save(sol);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    public List<Solicitud> getbyestado(String estado){
        return repositorio.findByEstado(estado);
       
    }

    public List<Solicitud> getEsp(long id, String estado){
        List<Solicitud> l = repositorio.findByMedicoAndEstado(id,estado);
        if(l.size() == 0 ){
            l = repositorio.findByGestorAndEstado(id,estado);
        }
        if(l.size() == 0){
            l = repositorio.findByEnfermereAndEstado(id,estado);
        }
        return l;
       
    }



}