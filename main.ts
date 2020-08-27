basic.forever(function () {
	for (let i=0; i<5; i++) {
        led.plot(i, i)
        basic.pause(50)
        basic.clearScreen()
    }
})
