const maxVida = 5;
const user = {};
const appName = "UCode"
const paginas = [
    {nome: "home",  app: "homeApp", menu: true, model: "modelPageDefault", style: "./src/style/home.css"},
    {nome: "login",  app: "loginApp", menu: false, model: "modelPageDefault", style: ""},
    {nome: "cadastro",  app: "cadastroApp", menu: false, model: "modelPageDefault", style: ""},
    {nome: "cursos",  app: "cursosApp", menu: true, model: "modelPageDefault", style: ""},
    {nome: "perfil",  app: "perfilApp", menu: true, model: "modelPageDefault", style: ""},
    {nome: "não encontrado",  app: "notFoundedApp", menu: false, model: "modelPageDefault", style: ""}
]

const modelos = [
    {nome: "modelPageDefault", style: "./src/style/modelPageDefault.css"}
]

function start() {
    carregaPagina("homeApp");
}
start();

//.setItem(key, 'value')
//.getItem(key)
//.removeItem(key)
//.clear() --Limpa Tudo

//./CARREGAPAGINA.JS
function carregaModelo(model) {
    const modelo = getModelo(model);

    if(modelo == undefined || modelo == null) {
        return carregaPagina("notFoundedApp");
    } else {
        let link = document.querySelector("head > link:nth-of-type(3)");
        link.href = modelo.style;

        let body = document.querySelector("body");
        body.classList = (modelo.nome);

        body.innerHTML = "";
    }

    if(model == "modelPageDefault") {
        let body = document.querySelector("body");
        let header = document.createElement("header");

        let h1 = document.createElement("h1");
            h1.textContent = appName;
            h1.addEventListener("click", () => carregaPagina("homeApp"));
        header.appendChild(h1);

        let nav = document.createElement("nav");
        nav.classList = "menuNav disabled";

        let menuItem = document.createElement("div");
        menuItem.classList = "menuNavBtn";
        menuItem.title = "Menu";

        let menuInp = document.createElement("input");
        menuInp.type = "checkbox";
        menuInp.id = "menuNavBtn-toggle"
        menuInp.addEventListener("change", () => { document.querySelector(".menuNav").classList.toggle("disabled") })
        menuItem.appendChild(menuInp);

        let menuIcon = document.createElement("label");
        menuIcon.classList = "menuNavBtn-icon";
        menuIcon.htmlFor = "menuNavBtn-toggle";
        menuIcon.innerHTML = "<span></span> <span></span> <span></span>"
        menuItem.appendChild(menuIcon);

        nav.appendChild(menuItem);

        let ul = document.createElement("ul");
        
        paginas.forEach(pagina => {
            if(pagina.menu) {
                let li = document.createElement("li");
                li.innerText = formataTextoAaa(pagina.nome);
                li.addEventListener('click', () => {carregaPagina(pagina.app)})
                ul.appendChild(li)
            }
        });

        nav.appendChild(ul)
        header.appendChild(nav);

        let button = document.createElement("button");
        button.classList = "btn-model1";
        button.innerText = "Login";
        button.addEventListener("click", () => carregaPagina("loginApp"));
        header.appendChild(button);

        let main = document.createElement("main");
        let footer = document.createElement("footer");

        body.appendChild(header)
        body.appendChild(main)
        body.appendChild(footer)
    }
}

function carregaPagina(pag) {
    const pagina = getPagina(pag);
    if(pagina == undefined || pagina == null) {
        return carregaPagina("notFoundedApp");
    } else {
        carregaModelo(pagina.model);
        document.querySelector("body").classList.add(pag);

        let title = document.querySelector("head > title");
        title.textContent = formataTextoAaa(pagina.nome) + " - " + appName;

        let link = document.querySelector("head > link:nth-of-type(4)");
        link.href = pagina.style;
    }

    if(pag == "homeApp") {
        //atualizaUsuario()
        const main = document.querySelector("body > main");

        let btn = document.createElement("button")
        btn.textContent = "Start"
        btn.classList.add("startBtn")

        main.appendChild(btn)
    } else if(pag == "loginApp") {
        //TODO
        //Fazer tela de Login


        //TODO
        //COLOCAR Método de login
        // function logar(login, pass) {
        //     //TODO
        //     //Verificar se existe o login e a senha no banco
        //     if(login === "admin" && pass === "admin") {
        //         carregaDadosUsuario(1)
        //     }
        // }

        //Caso volte
        // carregaPagina("home");

        //Caso escolha cadastrar
        // carregaPagina("cadastroUsuario")


        //TODO
        //Se clicar em logar na tela login:
        //     login    senha
        // logar("admin", "admin")

        //Caso login bem sucedido
        // carregaPagina("home")
    } else if (pag == "cadastroUsuario") {
        //TODO
        //Fazer caso escolha cadastrar
        //Se fizer cadastro os dados vão para o localStorage e Db
    }
}

function getPagina(paginaName) {
    let pag;
    paginas.forEach(pagina => {
        if(pagina.app == paginaName) {
            pag = pagina;
        }
    });
    return pag;
}

function getModelo(modelName) {
    let model;
    modelos.forEach(mod => {
        if(mod.nome == modelName) {
            model = mod;
        }
    });
    return model;
}

class Utils {
    static getDataIntFormatada(data) {
        if(data == null) {
            data = new Date();
        }
        return parseInt("" + data.getFullYear() + data.getMonth() + data.getDate)
    }
}

function formataTextoAaa(text) {
    let t = text.split(" ");
    let textAux = "";

    t.forEach(txt => {
        textAux += txt[0].toUpperCase() + txt.slice(1, txt.length).toLowerCase();
    })

    return textAux;
}

class Usuario {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.login = "";
        this.senha = "";
        this.ultimoLogin = "";
        this.vidas = maxVida;
        this.premium = "";
        this.cursos = [];
        this.pontos = 0; // Ganha poucos pontos por partida, com muitos pontos compra vida
    }
}

class Pagina {
    constructor() {
        this.nome = "";
        this.app = "";
        this.menu = false;
        this.model = "";
        this.style = "";
    }

}

class Modelo {
    constructor() {
        this.nome = "";
        this.style = "";
    }
}