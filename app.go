package main

import (
	"context"
	"cpuRoller/pkg/sys"
	"fmt"
)

var (
	stats    = &sys.Stats{}
	cpuStats sys.CpuStats
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// initStats
func (a *App) InitStats() sys.CpuStats {
	cpuStats = stats.GetStats()
	return cpuStats
}

// update cpu stats
func (a *App) UpdateCPUStats() sys.CpuStats {
	cpuStats.Usage = stats.GetCPUUsage()
	cpuStats.Swap = stats.GetSwapMemory()
	cpuStats.Mem = stats.GetMemory()
	return cpuStats
}
