package sys

import (
	"math"
	"runtime"
	"time"

	"github.com/wailsapp/wails"

	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
)

type Stats struct {
	log *wails.CustomLogger
}

type CpuStats struct {
	Usage   int
	Count   int
	Os      string
	Arch    string
	Swap    *mem.SwapMemoryStat
	Mem     *mem.VirtualMemoryStat
	CPUInfo []cpu.InfoStat
}

// WailsInit executes when type Stats is initialized
func (s *Stats) WailsInit(runtime *wails.Runtime) error {
	s.log = runtime.Log.New("Stats")
	return nil
}

// GetStats returns a pointer of type CpuStats
func (s *Stats) GetStats() CpuStats {
	return CpuStats{
		Usage:   s.GetCPUUsage(),
		Count:   s.GetCPUCount(),
		Os:      runtime.GOOS,
		Arch:    runtime.GOARCH,
		Swap:    s.GetSwapMemory(),
		Mem:     s.GetMemory(),
		CPUInfo: s.GetCPUInfo(),
	}
}

// GetCPUInfo returns a slice of type InfoStat
func (s *Stats) GetCPUInfo() []cpu.InfoStat {
	cpuInfo, err := cpu.Info()
	if err != nil {
		s.log.Errorf("Unable to retrive cpu information!")
	}
	return cpuInfo
}

// GetCPUCount returns the number of logical CPU in the system
func (s *Stats) GetCPUCount() int {
	count, err := cpu.Counts(true)
	if err != nil {
		s.log.Errorf("Unable to retrive cpu count!")
		return 0
	}
	return count
}

// GetCPUUsage returns the usage/load on the cpu
func (s *Stats) GetCPUUsage() int {
	percent, err := cpu.Percent(time.Second, false)
	if err != nil {
		s.log.Errorf("Unable to retrive cpu usage!")
		return 0
	}
	return int(math.Round(percent[0]))
}

// GetSwapMemory returns the realtime swap memory usages
func (s *Stats) GetSwapMemory() *mem.SwapMemoryStat {
	sms, err := mem.SwapMemory()
	if err != nil {
		s.log.Errorf("Unable to retrive swap memory!")
		return &mem.SwapMemoryStat{}
	}
	return sms
}

// GetMemory returns the realtime memory usage
func (s *Stats) GetMemory() *mem.VirtualMemoryStat {
	ms, err := mem.VirtualMemory()
	if err != nil {
		s.log.Errorf("Unable to retrive memory!")
	}
	return ms
}
