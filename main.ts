function モーター駆動１ (数値: number) {
    if (数値 > 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 数値)
    }
    if (数値 < 0) {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, Math.abs(数値))
    }
    if (数値 == 0) {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
}
function サーボ駆動１ (数値: number) {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 数値)
}
radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        X受信 = 10 - value
    }
    if (name == "Y") {
        Y受信 = value
    }
    if (name == "SW1") {
        SW1 = value
    }
    if (name == "SW2") {
        SW2 = value
    }
})
let SW2 = 0
let SW1 = 0
let Y受信 = 0
let X受信 = 0
radio.setGroup(1)
X受信 = 5
Y受信 = 5
SW1 = 0
SW2 = 0
let X表示 = 2
let Y表示 = 2
let 表示 = game.createSprite(2, 2)
let スピード = 0
let 角度 = 90
Kitronik_Robotics_Board.allOff()
Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 角度)
basic.forever(function () {
    角度 = 90 - (X受信 - 5) * 5
    サーボ駆動１(角度)
    スピード = (Y受信 - 5) * 10
    モーター駆動１(スピード)
    X表示 = X受信 / 2
    Y表示 = Y受信 / 2
    表示.set(LedSpriteProperty.X, X表示)
    表示.set(LedSpriteProperty.Y, Y表示)
    basic.pause(100)
})
