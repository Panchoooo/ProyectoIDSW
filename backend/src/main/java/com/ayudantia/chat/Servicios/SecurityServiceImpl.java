package com.ayudantia.chat.Servicios;

import java.util.ArrayList;
import java.util.List;

import com.ayudantia.chat.Jwt.JwtUtil;
import com.ayudantia.chat.Modelos.Role;
import com.ayudantia.chat.Modelos.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService{
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private UserServiceImpl userServiceImpa;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Override
    public ResponseEntity<List<String>> autoLogin(String username, String password) { // Metodo para logear.
        UserDetails userDetails = userDetailsService.loadUserByUsername(username); // Carga el usuario con el username.
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities()); // genera el token respectivo a sus datos 
        authenticationManager.authenticate(usernamePasswordAuthenticationToken); // autentifica el token obtenido.
        if (usernamePasswordAuthenticationToken.isAuthenticated()) { // si esta autentificado es un logeo exitoso.
            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken); 
            final UserDetails userDetalles = userDetailsService.loadUserByUsername(username);
            final String jwt = jwtTokenUtil.generateToken(userDetalles);
           
            String rol = "Error";
            final User userDetalles2 = userServiceImpa.findByUsername(username);
            for (Role role : userDetalles2.getRoles()){
                rol = role.getName();
            }
            List<String> lista = new ArrayList<String>();
            lista.add(jwt);
            lista.add(rol);
            return ResponseEntity.ok(lista);}       
        
        return null;


    }
}
