package com.ayudantia.chat.Controladores;

import java.util.ArrayList;
import java.util.List;

import com.ayudantia.chat.Controladores.util.*;
import com.ayudantia.chat.Modelos.User;
import com.ayudantia.chat.Servicios.SecurityService;
import com.ayudantia.chat.Servicios.UserService;
import com.ayudantia.chat.Validador.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;


    @PostMapping("/registrationMed")
    public ResponseEntity<?> registration(@RequestBody AuthenticationRequest request, BindingResult bindingResult) {
        User u = new User(request.getUsername(),request.getPassword(),request.getPasswordConfirm());
        userValidator.validate(u, bindingResult);
        if (bindingResult.hasErrors()) {
            return null;
        } 
        userService.save(u);       
        
        return securityService.autoLogin(u.getUsername(), u.getPasswordConfirm());
    }

    @PostMapping("/registrationGes")
    public ResponseEntity<?> registrationGestor(@RequestBody AuthenticationRequest request, BindingResult bindingResult) {
        User u = new User(request.getUsername(),request.getPassword(),request.getPasswordConfirm());
        userValidator.validate(u, bindingResult);
        if (bindingResult.hasErrors()) {
            return null;
        } 
        userService.saveGestor(u);       
        
        return securityService.autoLogin(u.getUsername(), u.getPasswordConfirm());
    }

    @PostMapping("/registrationEnf")
    public ResponseEntity<?> registrationEnf(@RequestBody AuthenticationRequest request, BindingResult bindingResult) {
        User u = new User(request.getUsername(),request.getPassword(),request.getPasswordConfirm());
        userValidator.validate(u, bindingResult);
        if (bindingResult.hasErrors()) {
            return null;
        } 
        userService.saveEnf(u);       
        
        return securityService.autoLogin(u.getUsername(), u.getPasswordConfirm());
    }

    @PostMapping({"/","/login"})
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest request) {
        return securityService.autoLogin(request.getUsername(), request.getPassword());
    }

    @PostMapping("/verEnfs") // Ver todas / Admin
    public List<EntidadResponse> getAllEnfs() { 
        List<User> l = userService.getAllenfer();
        List<EntidadResponse> b = new ArrayList<EntidadResponse>();
        for(User c : l)
        {
            b.add(new EntidadResponse(c.getId(),c.getUsername()));
            System.out.println(c.getUsername());
        }
        return b ;
    }



}
