packageName=`jq -r '.name' project.json`
packageVersion=`jq -r '.version' project.json`
packagePlatform="amd64"
packageBinName=`jq -r '.binaryname' project.json`
packageDisc=`jq -r '.description' project.json`

##################################################################
# Creating MacOS application #####################################
##################################################################
echo "<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd'>
<plist version='1.0'><dict>
	<key>CFBundlePackageType</key><string>APPL</string>
	<key>CFBundleName</key><string>$packageName</string>
	<key>CFBundleExecutable</key><string>$packageName</string>
	<key>CFBundleIdentifier</key><string>$packageName.$packageVersion</string>
	<key>CFBundleVersion</key><string>$packageVersion</string>
	<key>CFBundleGetInfoString</key><string>Built by Sarthak Pranesh</string>
	<key>CFBundleShortVersionString</key><string>$packageVersion</string>
	<key>CFBundleIconFile</key><string>iconfile</string>
	<key>NSHighResolutionCapable</key><string>true</string>
</dict></plist>" > info.plist

wails build -x darwin/amd64 -f -p
