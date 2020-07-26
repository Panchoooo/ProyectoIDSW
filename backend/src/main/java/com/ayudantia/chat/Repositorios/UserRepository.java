package com.ayudantia.chat.Repositorios;

import java.util.List;

import com.ayudantia.chat.Modelos.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    public abstract List<User> findAllByRoles_Id(long id);
}
