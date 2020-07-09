input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    nb += 1
    basic.showString("" + ("" + nb))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    nb = 1
    basic.showString("" + ("" + nb))
})
let nb = 0
nb = 1
basic.showString("" + ("" + nb))
