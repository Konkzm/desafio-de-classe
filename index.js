class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        switch (this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;
            case "Guerreiro":
                ataque = "Espada"
                break  
            case "Monge":
                ataque = "artes marciais"
                break
            case "Ninja":
                ataque = "Shuriken"
                break
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
        }
    }
     let junior = new Heroi ("Junior", 24, "Mago")
     junior.atacar()

     //tive que fazer algumas alterações no enunciado porque estava aparecendo "o mago junior atacou usando usou magia"





    