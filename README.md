<div align="center">

# Cpu Roller

[![GitHub issues](https://img.shields.io/github/issues/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/pulls)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/sarthakpranesh/CpuRoller)]()
[![GitHub All Releases](https://img.shields.io/github/downloads/sarthakpranesh/CpuRoller/total)](https://github.com/sarthakpranesh/CpuRoller/releases)
[![GitHub](https://img.shields.io/github/license/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/blob/master/LICENSE)

<br />

<img src="./sample.gif" />

</div>

<br />

## What it does

Simple Cross platform Desktop application for displaying realtime CPU usage of your Desktop/Laptop. Available for Linux and MacOS. Utilizes React.js frontend and Go lang backend, developed with Wails.

<br />

## Uses

- [Wails](https://github.com/wailsapp/wails)
- [gopsutil](https://github.com/shirou/gopsutil)

<br />

## For Developer:

Make sure you have GO lang and npm installed
<br />

1. `git clone https://github.com/sarthakpranesh/CpuRoller`
2. `cd CpuRoller`
3. If you don't have Wails then install it using the following command: `go get -u github.com/wailsapp/wails/cmd/wails`
4. `wails serve` - leave the command running and open another terminal
5. `cd frontend`
6. `yarn install`
7. `yarn start`

<br />

## Compile/Build/Package app

1. Compile application using: `wails build`
2. Run compiled application from the `build` folder, eg: `./build/cpuRoller`

<br/>

## Found Something Broken

If you find something broken or not working on your machine/os, please feel free to open an issue.

<br />

<div align="center">

##### Made with ❤️

</div>
