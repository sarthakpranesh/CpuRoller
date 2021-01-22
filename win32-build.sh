packageName=`jq -r '.name' project.json`
packageVersion=`jq -r '.version' project.json`
packagePlatform="amd64"
packageBinName=`jq -r '.binaryname' project.json`
packageDisc=`jq -r '.description' project.json`

##################################################################
# Creating Windows exe application ###############################
##################################################################
# create required *.exe.manifest file
echo "<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<assembly manifestVersion='1.0' xmlns='urn:schemas-microsoft-com:asm.v1' xmlns:asmv3='urn:schemas-microsoft-com:asm.v3'>
    <assemblyIdentity type='win32' name='$packageName' version='$packageVersion' processorArchitecture='$packagePlatform'/>
    <description>$packageDisc</description>
    <asmv3:application>
        <asmv3:windowsSettings>
            <dpiAware xmlns='http://schemas.microsoft.com/SMI/2005/WindowsSettings'>true/pm</dpiAware> <!-- fallback for Windows 7 and 8 -->
            <dpiAwareness xmlns='http://schemas.microsoft.com/SMI/2016/WindowsSettings'>permonitorv2,permonitor</dpiAwareness> <!-- falls back to per-monitor if per-monitor v2 is not supported -->
            <gdiScaling xmlns='http://schemas.microsoft.com/SMI/2017/WindowsSetting'>true</gdiScaling> <!-- enables GDI DPI scaling -->
        </asmv3:windowsSettings>
    </asmv3:application>
</assembly>" > cpuRoller.exe.manifest

# cross compile for windows platform and package the application
wails build -x windows/amd64 -f -p
