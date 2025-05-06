import { user } from "./main";
import { maxVida } from "./main";

// Carrega dados do usuário
// Se o usuário não estiver logado ele cria um default
export function atualizaUsuario() {
    if(localStorage.getItem("user") != null) {
        //Pega usuário e carrega todos os dados atuais
        let usuario = JSON.parse(localStorage.getItem("user"));
        carregaDadosUsuario(usuario.id)
    } else {
        carregaDadosUsuario(0);
    }
}

function carregaDadosUsuario(idUsuario) {
    localStorage.clear()

    let usuario;

    // Se usuário não for vazio busca, se não gera um default
    if(idUsuario > 0 ) {
        //TODO
        //Buscar usuario apartir do ID
        let usuario = {id: idUsuario, nome: "Admin", vida: 5, ultimoLogin: 20250429}
        
        //Pega data e formata para o padrão yyyymmdd em inteiro
        let data = new Date();
        let hoje = parseInt("" + data.getFullYear() + data.getMonth() + data.getDate)
    
        //Se passou um dia desde o ultimo login, reseta as vidas
        if(usuario.ultimoLogin < hoje) {
            usuario.vida = maxVida;
        }
    } else {
        usuario = getUsuarioDefault();
    }

    //Seta o ultimo login para o horário atual
    usuario.ultimoLogin = hoje;

    //TODO
    //Busca cursos que o usuário tem algum progresso
    // let cursos = [{id: 1, nome: "JS", }, {id: 2, nome: "CSS"}]

    localStorage.setItem("user", JSON.stringify(usuario))
    user = usuario;

}

function getUsuarioDefault() {
    return usuario = {
        id: 0,
        nome: "Usuário",
        login: "",
        vida: maxVida,
        ultimoLogin: 0
    }
}

class Usuario {
    constructor() {
        this.id = 0;
        this.nome = "Usuário";
        this.login = "";
        this.vida = maxVida;
        this.ultimoLogin = 0;
    }
}
