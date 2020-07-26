package com.ayudantia.chat;

import com.ayudantia.chat.Jwt.JwtRequestFilter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Qualifier("userDetailsServiceImpl")
    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    JwtRequestFilter filter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
            .antMatchers("/login").permitAll()
            .antMatchers("/registrationMed").permitAll()
            .antMatchers("/registrationGes").permitAll()
            .antMatchers("/registrationEnf").permitAll()
            .antMatchers("/registrationPab").permitAll()
            .antMatchers("/solicitud").access("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
            .antMatchers("/versolicitudes").permitAll()
            .antMatchers("/ver1solicitud").permitAll()
            .antMatchers("/ges1solicitud").access("hasRole('ROLE_GESTOR') OR hasRole('ROLE_ADMIN')")
            .antMatchers("/verallsolicitudes").access("hasRole('ROLE_GESTOR') OR hasRole('ROLE_ADMIN')")
            .antMatchers("/verallPabellones").permitAll()
            .antMatchers("/verallsolicitudesestado").permitAll()    
            .antMatchers("/verEnfs").permitAll()
            .antMatchers("/fin1solicitud").permitAll()
            .antMatchers("/alta1solicitud").permitAll()
            .antMatchers("/").permitAll()
            .anyRequest().authenticated()
            .and().sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS); // no crear una sesion
        // usa nuestro filtro antes que el de spring security
    http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class); 
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder());
    }
}