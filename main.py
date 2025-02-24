basic.show_icon(IconNames.PITCHFORK)
basic.pause(1000)

def on_forever():
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(500)
basic.forever(on_forever)
