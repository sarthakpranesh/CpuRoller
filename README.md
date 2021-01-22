<div align="center">

<br />

<img src="./sample.gif" />

<br />
<br />

# Cpu Roller

[![GitHub issues](https://img.shields.io/github/issues/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/pulls)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/sarthakpranesh/CpuRoller)]()
[![GitHub All Releases](https://img.shields.io/github/downloads/sarthakpranesh/CpuRoller/total)](https://github.com/sarthakpranesh/CpuRoller/releases)
[![GitHub](https://img.shields.io/github/license/sarthakpranesh/CpuRoller)](https://github.com/sarthakpranesh/CpuRoller/blob/master/LICENSE)

<br />
<br />

</div>

## What it does

Simple Cross platform Desktop application for displaying realtime CPU usage of your Desktop/Laptop. Available for Windows, Linux and MacOS. Utilizes React.js frontend and Go lang backend, developed with Wails.

<br />
<br />

## How to Install
This app is currently supported and tested on Windows 10, MacOS and Debian based linux distribution like Ubuntu.

#### Windows
Download the latest `.exe` file from [here](https://github.com/sarthakpranesh/CpuRoller/releases) and directly run it. Their is no installation required. You might get a warning dialog from Windows, just click on `more info` and then click `run anyway` to start the application.

#### Ubuntu/POP OS/Other Debian distros
Download the latest `.deb` file from [here](https://github.com/sarthakpranesh/CpuRoller/releases) and either use `Eddy` (or any other GUI tool) to install the `.deb` package or run the following in the terminal (make sure you replace the `x.x.x` with the version number you downloaded)
```bash
sudo dpkg -i cpuRoller_x.x.x_amd64.deb
```
Now you can either run the application by running the `cpuRoller` command in terminal or by application icon.

#### Mac OS
Download the latest `.app.zip` file from [here](https://github.com/sarthakpranesh/CpuRoller/releases). Extract this file, right click on it and select `open` from the menu. Give it permission to run and your app will start.

<br />

All releases also provide binary executables, if you have any issues you can try running these executables directly.

<br />
<br />

## For Developer
Make sure you have GO lang, npm and wails installed. First `fork` this repository, `clone` it locally and `cd` into it.

### For Active Development
The following commands will let you use the standard `React` tools and development process to build the app. If you change any GO code then you'll have to rerun the 1st step for the change to take affect.
1. Run this command in the root of the project and leave it running: `wails serve`
2. Open another terminal and navigate to the frontend folder: `cd frontend`
3. Make sure all packages are installed: `npm install`
4. Start the app: `npm run start`

### Building and Packaging
#### For Windows:
If you are on `windows` then simply run the following:
* `wails build -p`

If you are on `linux` or `macos` make sure you have docker installed and run the following:
* `bash win32-build.sh`

#### For Debian:
1. First Build app binary using: `wails build`
2. Then Package app using: `bash ./debian-build.sh`

#### For Mac OS:
If you are on `macos` then simply run the following:
* `wails build -p`

If you are on `linux` then make sure you have docker installed and run the following:
* `bash mac-build.sh`

<br />
<br />

## Issues/Requests/Discussion

If you find something broken or not working properly on your machine/os, please feel free to open an issue. All feature requests, suggestions and discussions are welcomed.

<br />
<br />

<div align="center">

### Made with ❤️

</div>
