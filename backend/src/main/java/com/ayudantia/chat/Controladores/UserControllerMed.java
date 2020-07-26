package com.ayudantia.chat.Controladores;

import java.util.List;

import com.ayudantia.chat.Controladores.util.*;
import com.ayudantia.chat.Jwt.JwtUtil;
import com.ayudantia.chat.Modelos.Pabellon;
import com.ayudantia.chat.Modelos.Solicitud;
import com.ayudantia.chat.Servicios.PabellonService;
import com.ayudantia.chat.Servicios.SolicitudService;
import com.ayudantia.chat.Servicios.UserServiceImpl;

import com.ayudantia.chat.Modelos.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserControllerMed {


    @Autowired
    private SolicitudService solService;

    @Autowired
    private PabellonService pabService;

    @Autowired
    private JwtUtil jwtu;

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/solicitud") // Crear solicitud, para medicos
    public String crearSolicitud(@RequestBody SolicitudRequest request,@RequestHeader("Authorization") String jwt){
        jwt = jwt.substring(7);
        String n = jwtu.extractUsername(jwt);
        User u = userService.findByUsername(n);
        Solicitud soli = new Solicitud(u.getId() , request.getRut_paciente());
        solService.crear(soli);
        return n;
    }

    @GetMapping(value="/versolicitudes") // Ver solicitudes segun ID / Todos
    public List<Solicitud> getSolicitudes(@RequestHeader("Authorization") String jwt) {
        jwt = jwt.substring(7);
        String n = jwtu.extractUsername(jwt);
        User u = userService.findByUsername(n);
        return solService.getAllById(u.getId());
    }

    @GetMapping(value="/verallsolicitudes") // Ver todas / Admin
    public List<Solicitud> getAllSolicitudes() { 
        return solService.getAll();
    }

    @PostMapping("/ver1solicitud") // Para ver detalles / Todos
    public Solicitud get1Solicitudes(@RequestBody SolicitudRequest request) {
        return solService.getById(request.getId());
    }

    @PostMapping("/ges1solicitud")  
    public boolean ges1Solicitudes(@RequestBody SolicitudRequest request,@RequestHeader("Authorization") String jwt) {
        jwt = jwt.substring(7);
        String n = jwtu.extractUsername(jwt);
        User u = userService.findByUsername(n);
        boolean sol = solService.SolicitudEnProceso(request.getId(),u.getId(),request.getEnfermere(),request.getId_Pab());
        try {
            pabService.Obtener(request.getId_Pab()).setEstado("Ocupado");
            return sol;
        } catch (Exception e) {
            return false;
        }
        
    }

    @PostMapping("/alta1solicitud")  
    public boolean alta1Solicitud(@RequestBody SolicitudRequest request) {
        boolean sol = solService.SolicitudEnAlta(request.getId());
        try {
            pabService.Obtener(request.getId_Pab()).setEstado("Dado de Alta");
            return sol;
        } catch (Exception e) {
            return false;
        }
        
    }


    @PostMapping("/fin1solicitud")  
    public Boolean fin1Solicitudes(@RequestBody SolicitudRequest request) {
        return solService.fin(request.getId());

    }

    @PostMapping(value="/verallsolicitudesestado") // Para ver todos / con Estado / Admin
    public List<Solicitud> getAllSolicitudes(@RequestBody SolicitudRequest request) {
        if(request.getEstado().equals("All")){
            return solService.getAll();            
        }
        else{
        return solService.getbyestado(request.getEstado());}
    }

    @PostMapping(value="/verallsolicitudesEsp") // Para ver todos / con Estado / Todos
    public List<Solicitud> getAllSolicitudesEsp(@RequestBody SolicitudRequest request,@RequestHeader("Authorization") String jwt) {
        if(request.getEstado().equals("All")){
            System.out.println("All");
            return solService.getAllById(request.getId());            
        }
        else{System.out.println(request.getEstado());
            jwt = jwt.substring(7);
            String n = jwtu.extractUsername(jwt);
            User u = userService.findByUsername(n);
            return solService.getEsp(u.getId(),request.getEstado());
        
        }
    }

    @PostMapping("/registrationPab") // Crear solicitud, para medicos
    public boolean crearPabellon(@RequestBody PabellonRequest request){

        Pabellon pabes = new Pabellon(request.getId(),request.getPabellon(),request.getEstado(),request.getTipo());
        pabes.setEstado("Disponible");
        
        return pabService.crear(pabes);
    }

    @GetMapping(value="/verallPabellones") // Ver todas / Admin
    public List<Pabellon> getAllPabellones() { 
        System.out.println("AAAAAAAAAAAA1");
        return pabService.getAll();
    }



}
