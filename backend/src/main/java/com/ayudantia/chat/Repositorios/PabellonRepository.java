package com.ayudantia.chat.Repositorios;

import java.util.List;

import com.ayudantia.chat.Modelos.Pabellon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("PabellonRepositorio")
public interface PabellonRepository extends JpaRepository<Pabellon, Long> {

    public abstract List<Pabellon> findAllByOrderByIdDesc();
    public abstract List<Pabellon> findAll();
    public abstract Pabellon findById(long id);
}