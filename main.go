package main

import (
	"cpuRoller/pkg/sys"
	"fmt"

	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
)

func basic() string {
	stats := &sys.Stats{}
	var cpuUse *sys.CpuUsage = stats.GetCPUUsage()
	return fmt.Sprint(cpuUse.Average)
}

func main() {

	js := mewn.String("./frontend/build/static/js/main.js")
	css := mewn.String("./frontend/build/static/css/main.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "cpuRoller",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Run()
}
