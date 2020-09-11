package main

import (
	"cpuRoller/pkg/sys"

	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
)

var (
	stats    = &sys.Stats{}
	cpuStats sys.CpuStats
)

func initStats() sys.CpuStats {
	cpuStats = stats.GetStats()
	return cpuStats
}

func updateCPUStats() sys.CpuStats {
	cpuStats.Usage = stats.GetCPUUsage()
	cpuStats.Swap = stats.GetSwapMemory()
	cpuStats.Mem = stats.GetMemory()
	return cpuStats
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
	app.Bind(initStats)
	app.Bind(updateCPUStats)
	app.Run()
}
