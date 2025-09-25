export class Juego {

    constructor() {

    }
 

    jugarMano(manoJugador:Mano, manoOponente:Mano):Resultado {
        return manoJugador.jugarContra(manoOponente)
    }

    jugar(jugadaJugador: Jugada, jugadaOponente: Jugada): Resultado {

        let resultado: Resultado =  Resultado.EMPATE

        if (jugadaJugador === Jugada.PAPEL && jugadaOponente === Jugada.TIJERA) {
            resultado =  Resultado.PERDISTE;
        } else if (jugadaJugador === Jugada.PIEDRA && jugadaOponente === Jugada.TIJERA) {
            resultado =  Resultado.GANASTE;
        }

        return resultado
    }

    
}

export class Piedra implements Mano {
    jugarContra(mano:Mano) : Resultado {
        return Resultado.EMPATE
    }


    contraPapel() : Resultado{
        return Resultado.EMPATE
    }
}

export class Papel implements Mano {
    jugarContra(mano:Mano) : Resultado {
        return mano.contraPapel()
        
    }

    contraPapel() : Resultado{
        return Resultado.EMPATE
    }
}

export class Tijera implements Mano {
    jugarContra(mano:Mano) : Resultado {
        return Resultado.EMPATE
    }


    contraPapel() : Resultado{
        return Resultado.PERDISTE 
        //coment
    }
}

export interface Mano  {
    jugarContra(mano:Mano):Resultado
    contraPapel():Resultado
}

export enum Jugada {
    PAPEL,
    TIJERA,
    PIEDRA
}

export enum Resultado {
    GANASTE,
    PERDISTE,
    EMPATE
}