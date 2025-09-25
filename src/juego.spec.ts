
import { Juego, Jugada, Resultado, Mano, Piedra, Tijera, Papel } from "./juego";


describe('Piedra, papel o tijera', () => {
    test('Los 2 jugadores tienen papel, entonces es empate', () => {
        const juego = new Juego();
        const resultado = juego.jugar(Jugada.PAPEL, Jugada.PAPEL);

        expect(resultado).toBe(Resultado.EMPATE);

    });

    test('Los 2 jugadores tienen papel, entonces es empate', () => {
        const juego = new Juego();
        const manoJugador : Mano = new Piedra();
        const manoOponente : Mano = new Piedra();
        const resultado = juego.jugarMano(manoJugador, manoOponente);

        expect(resultado).toBe(Resultado.EMPATE);

    });

    test('El jugador tiene papel y el oponente tiene tijera, entonces el jugador pierde', () => {
        const juego = new Juego();
        const manoJugador : Mano = new Papel();
        const manoOponente : Mano = new Tijera();
        const resultado = juego.jugarMano(manoJugador, manoOponente);

        expect(resultado).toBe(Resultado.PERDISTE);

    });

    test('El jugador tiene papel y el oponente tiene tijera, entonces el jugador pierde', () => {
        const juego = new Juego()
        const resultado = juego.jugar(Jugada.PAPEL, Jugada.TIJERA)

        expect(resultado).toBe(Resultado.PERDISTE);

    });

    test('El jugador tiene piedra y el oponente tiene tijera, entonces el jugador gana', () => {
        const juego = new Juego()
        const resultado = juego.jugar(Jugada.PIEDRA, Jugada.TIJERA)

        expect(resultado).toBe(Resultado.GANASTE);

    });
});
