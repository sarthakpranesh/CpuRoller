packageName=`jq -r '.name' project.json`
packageVersion=`jq -r '.version' project.json`
packagePlatform="all"
packageBinName=`jq -r '.binaryname' project.json`
packageDisc=`jq -r '.description' project.json`

dir="./tmp/"$packageName"_"$packageVersion"_"$packagePlatform
mkdir -p $dir

# create required sub directories
cd $dir
mkdir DEBIAN
mkdir -p usr/local/bin

# copy files
cp ../../build/cpuRoller ./usr/local/bin/cpuRoller
cp ../../appicon.png ./cpuRoller.png

# create the .desktop file
echo "[Desktop Entry]
Encoding=UTF-8
Name=$packageName
Comment=$packageDisc
Exec=/usr/local/bin/cpuRoller
Terminal=false
Type=Application
Icon=/usr/share/pixmaps/cpuRoller.png" > cpuRoller.desktop

# Create debian related files
cd DEBIAN

# debian control file
echo "Package: $packageName
Version: $packageVersion
Architecture: $packagePlatform
Maintainer: Sarthak Pranesh <sarthakpranesh08@gmail.com>
Description: $packageDisc" > control

# will run after install - creates desktop icon in gnome
echo "sudo chmod +x /usr/local/bin/cpuRoller
sudo cp ../cpuRoller.png /usr/share/pixmaps/cpuRoller.png
sudo cp ../cpuRoller.desktop /usr/share/applications/cpuRoller.desktop
" > postinst

# will run before uninstall - will remove icon and desktop file
echo "sudo rm -r /usr/share/pixmaps/cpuRoller.png
sudo rm -r /usr/share/applications/cpuRoller.desktop
" > prerm

# change permission for postinst and prerm
chmod -R 0775 postinst
chmod -R 0775 prerm


cd ../../

# start packaging .deb file
dpkg-deb --build --root-owner-group "$packageName"_"$packageVersion"_"$packagePlatform"

# copy .deb package to build
cp ./*.deb ../build/

# clean up
cd ../
rm -rf ./tmp

