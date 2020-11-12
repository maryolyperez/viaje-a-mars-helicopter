input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(2000)
})
function Validar_coordenadas () {
    if (Coordenada_X <= 4 && (Coordenada_X >= 0 && (Coordenada_Y <= 4 && Coordenada_Y >= 0))) {
        Coordenadas = game.createSprite(Coordenada_X, Coordenada_Y)
        return true
    } else {
        return false
    }
}
let Coordenadas: game.LedSprite = null
let Coordenada_Y = 0
let Coordenada_X = 0
Coordenada_X = 0
Coordenada_Y = 0
let Vuelos = 0
basic.forever(function () {
    if (!(Validar_coordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
