radio.onReceivedString(function (receivedString) {
    People_In_Shop = People_In_Shop - 1
})
let People_In_Shop = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
radio.setGroup(13)
People_In_Shop = 0
while (true) {
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && People_In_Shop <= 10) {
        basic.showLeds(`
            . . . # #
            . # # . .
            # . . . .
            . # # . .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . # # .
            . # . . .
            . . # # .
            . . . . #
            `)
        basic.showString(" ENTRANCE")
        while (true) {
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && People_In_Shop <= 10) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
        People_In_Shop = People_In_Shop + 1
        serial.writeNumber(People_In_Shop)
    } else {
        while (true) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
        basic.showString("PLEASE WAIT")
        basic.showIcon(IconNames.No)
    }
}
