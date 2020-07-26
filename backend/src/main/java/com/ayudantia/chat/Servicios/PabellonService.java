package com.ayudantia.chat.Servicios;

import com.ayudantia.chat.Repositorios.PabellonRepository;

import java.util.List;

import com.ayudantia.chat.Modelos.Pabellon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PabellonService {
    


    
    @Autowired
    PabellonRepository repositorio;


    public List<Pabellon> getAll(){
        List<Pabellon> l = repositorio.findAll();
        System.out.println(l);

        System.out.println("AAAAAAAAAAAA");
        return l;
       
    }


    public boolean crear(Pabellon mensaje){
        try{
            repositorio.save(mensaje);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    public Pabellon Obtener(long id){
        return repositorio.findById(id);
    }

}