package sys

import (
	"math"
	"time"

	"github.com/wailsapp/wails"

	"github.com/shirou/gopsutil/cpu"
)

type Stats struct {
	log *wails.CustomLogger
}

type CpuUsage struct {
	Average int `json:"avg"`
}

// WailsInit executes when type Stats is initialized
func (s *Stats) WailsInit(runtime *wails.Runtime) error {
	s.log = runtime.Log.New("Stats")
	return nil
}

// GetCPUUsage returns the usage/load on the cpu
func (s *Stats) GetCPUUsage() *CpuUsage {
	percent, err := cpu.Percent(time.Second, false)
	if err != nil {
		s.log.Errorf("Unable to retrive cpu usage!")
		return nil
	}
	return &CpuUsage{
		Average: int(math.Round(percent[0])),
	}
}
