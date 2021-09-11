const {app, BrowserWindow, Menu, MenuItem} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile("index.html")
}

const menu = new Menu()
// menu.append(new MenuItem({
//     label: 'Electron',
//     submenu: [{
//         role: 'help',
//         accelerator: process.platform == 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
//         click: () => { console.log("Electron Rocks")}
//     }]
// }))

Menu.setApplicationMenu(menu)

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function(){
        if (BrowserWindow.getAllWindows().length == 0) createWindow()
    })
})

app.on('window-all-closed', function(){
    if (process.platform != 'darwin') app.quit()
})