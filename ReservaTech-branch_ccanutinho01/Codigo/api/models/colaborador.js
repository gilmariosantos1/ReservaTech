class Colaborador {
    constructor(id, nome, matricula, email, departamento){
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.email = email;
        this.departamento= departamento;
        this.status = "ativo";
        this.dataCriacao = new Date();
    
}
podeReservar(){
    return this.status==="ativo";    
 }
}
export default Colaborador;
