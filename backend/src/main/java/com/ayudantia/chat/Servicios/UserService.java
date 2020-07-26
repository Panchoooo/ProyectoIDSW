package com.ayudantia.chat.Servicios;

import java.util.List;

import com.ayudantia.chat.Modelos.User;

public interface UserService {
    void save(User user);
    void saveGestor(User user);
    void saveEnf(User user);
    User findByUsername(String username);
    List<User> getAllenfer();
}
