//Não aprendemos Getters e Setters//

//Estudante: Talita Gabriela Del Poso Vilalva (INFO-5B)//

class Usuarios {
    constructor (usuarioId, usuarioNickname, usuarioNome){
        this.usuarioId = usuarioId;
        this.usuarioNickname = usuarioNickname;
        this.usuarioNome = usuarioNome;
    }
}

class Jogos {
    constructor (jogoId, jogoTitulo, jogoDescricao, jogoPrecoBase){
        this.jogoId = jogoId;
        this.jogoTitulo = jogoTitulo;
        this.jogoDescricao = jogoDescricao;
        this.jogoPrecoBase = jogoPrecoBase;
    }
}

class Conquistas {
    constructor (conquistasId, conquistasTitulo, conquistasDescricao){
        this.conquistasId = conquistasId;
        this.conquistasTitulo = conquistasTitulo;
        this.conquistasDescricao = conquistasDescricao;
    }
}

const usuario1 = new Usuarios(1,"TaliGabi","Talita Gabriela");
console.log(usuario1)

const jogo1 = new Jogos(1, "League of Legends", "Destrua as torres  e seu inimigos!", 10);
console.log(jogo1)

const conquista1 = new Conquistas(1, "MVP 1", "Primeira vez como MVP da partida");
console.log(conquista1)