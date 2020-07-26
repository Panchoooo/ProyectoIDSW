package com.ayudantia.chat.Servicios;

import com.ayudantia.chat.Modelos.User;
import com.ayudantia.chat.Repositorios.RoleRepository;
import com.ayudantia.chat.Repositorios.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // Se guarda password encriptada
        user.setRoles(new HashSet<>(roleRepository.findById(2)));  // Se ingresan los roles respectivos.  <--------------- ROL ASIGNANDOSE AQUI
        userRepository.save(user); // repositorio es encargado de guardar al usuario.
    }

    @Override
    public void saveGestor(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // Se guarda password encriptada
        user.setRoles(new HashSet<>(roleRepository.findById(3)));  // Se ingresan los roles respectivos.  <--------------- ROL ASIGNANDOSE AQUI
        userRepository.save(user); // repositorio es encargado de guardar al usuario.
    }

    @Override
    public User findByUsername(String username) { // Buscar por nombre
        return userRepository.findByUsername(username); 
    }
    @Override
    public void saveEnf(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword())); // Se guarda password encriptada
        user.setRoles(new HashSet<>(roleRepository.findById(4)));  // Se ingresan los roles respectivos.  <--------------- ROL ASIGNANDOSE AQUI
        userRepository.save(user); // repositorio es encargado de guardar al usuario.
    }

    @Override
    public List<User> getAllenfer() { // Buscar por nombre

        List<User> b = new ArrayList<User>();
        List<User> l = userRepository.findAllByRoles_Id(4);
        for(User c : l)
{
    //imprimimos el objeto pivote
    b.add(c);
    System.out.println(c.getUsername());
}


     //   b.add(userRepository.findByUsername(a));
        System.out.println(userRepository.findAllByRoles_Id(4).size());
        return b;
    }
    
}
