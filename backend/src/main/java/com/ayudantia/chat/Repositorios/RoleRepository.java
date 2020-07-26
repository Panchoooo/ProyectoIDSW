package com.ayudantia.chat.Repositorios;

import java.util.Set;

import com.ayudantia.chat.Modelos.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("RoleRepositorio")
public interface RoleRepository extends JpaRepository<Role, Long> {

    public abstract Set<Role> findById(long id);
}
