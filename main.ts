input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showString("GO")
    開始 = 1
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    開始 = 0
    分數 = 0
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
})
let 分數 = 0
let 開始 = 0
basic.showIcon(IconNames.Happy)
開始 = 0
分數 = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (開始 == 1) {
        // 計分跟圖案背景音效
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            // 背景音效
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.Yes)
            分數 += 1
            basic.showNumber(分數)
        } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.No)
            分數 += -5
            basic.showNumber(分數)
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.Yes)
            分數 += 1
            basic.showNumber(分數)
        }
        basic.pause(100)
    }
})
