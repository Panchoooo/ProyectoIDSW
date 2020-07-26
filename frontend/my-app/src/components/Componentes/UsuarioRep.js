import axios from 'axios';


export class UsuarioRep{


    RegistrarMed(solicitud){
        return axios.post("/registrationMed",solicitud).then(res => [res.data[0], res.data[1]] )

    }

    RegistrarGes(solicitud){
        return axios.post("/registrationGes",solicitud).then(res => [res.data[0], res.data[1]] )

    }

    RegistrarEnf(solicitud){
        return axios.post("/registrationEnf",solicitud).then(res => [res.data[0], res.data[1]] )

    }
    RegistrarPab(solicitud){
        return axios.post("/registrationPab ",solicitud).then(res => [res.data] )

    }

    Logear(solicitud){
        return axios.post("/login",solicitud).then(res => [res.data[0], res.data[1]] ).catch(error => {
            return "error";
          });

    }

    crearSol(solicitud){
        return axios.post("/solicitud",solicitud,{ headers: { Authorization: `Bearer ${ localStorage.getItem('jwt') }` } }).then(res => res).catch(error => {
            return "error";
          });    
    }

    verSol(){
        return axios.get("/versolicitudes",{ headers: { Authorization: `Bearer ${ localStorage.getItem('jwt') }` } }).then(res => res).catch(error => {
            return "error";
          });    
    }

    verAllSol(){
        return axios.get("/verallsolicitudes",{ headers: { Authorization: `Bearer ${ localStorage.getItem('jwt') }` } }).then(res => res).catch(error => {
            return "error";
          });    
    }
    verAllPab(){
        return axios.get("/verallPabellones").then(res => res).catch(error => {
            return "error";
          });    
    }
    verDetSol(solicitud){
        return axios.post("/ver1solicitud",solicitud).then(res => res).catch(error => {
            return "error";
          });    
    }

    GesSol(solicitud){console.log(solicitud)
        return axios.post("/ges1solicitud",solicitud,{ headers: { Authorization: `Bearer ${ localStorage.getItem('jwt') }` } }).then(res => res).catch(error => {
            return "error";
          });    
    }

    verSolbyEst(solicitud){
        return axios.post("/verallsolicitudesestado",solicitud).then(res => res).catch(error => {
            return "error";
          });    
    }

    verSolEsp(solicitud){
        return axios.post("/verallsolicitudesEsp",solicitud,{ headers: { Authorization: `Bearer ${ localStorage.getItem('jwt') }` }}).then(res => res).catch(error => {
            return "error";
          });    
    }

    verEnfs(){
        return axios.post("/verEnfs").then(res => res).catch(error => {
            return "error";
          });    
    }

    FinSol(solicitud){
        return axios.post("/fin1solicitud",solicitud).then(res => res).catch(error => {
            return "error";
          });    
    }

    AltaSol(solicitud){
        return axios.post("/alta1solicitud",solicitud).then(res => res).catch(error => {
            return "error";
          });    
    }

}