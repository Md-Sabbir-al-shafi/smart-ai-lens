basic.showIcon(IconNames.Heart)
let test = 0
nezhaV2.move(nezhaV2.MotorPostion.M1, 0, nezhaV2.MovementDirection.CW, 60, nezhaV2.SportsMode.Degree)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        nezhaV2.move(nezhaV2.MotorPostion.M1, 25, nezhaV2.MovementDirection.CW, test, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.AutoDelayStatus)
        test += 10
        serial.writeLine("" + (test))
        if (test >= 200) {
            nezhaV2.move(nezhaV2.MotorPostion.M1, 25, nezhaV2.MovementDirection.CW, 200, nezhaV2.SportsMode.Degree)
            test = 200
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        nezhaV2.move(nezhaV2.MotorPostion.M1, 25, nezhaV2.MovementDirection.CCW, test, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.AutoDelayStatus)
        test += -10
        serial.writeLine("" + (test))
        if (test <= 0) {
            nezhaV2.move(nezhaV2.MotorPostion.M1, 25, nezhaV2.MovementDirection.CCW, 60, nezhaV2.SportsMode.Degree)
            test = 0
        }
    }
})
