const { app, BrowserWindow, ipcMain, globalShortcut  } = require('electron')
let w; let isClickThrough = false;
const createWindow = () => {
    const win = new BrowserWindow({
        width: 720,
        height: 480, 
        frame: false, 
        transparent: true,
        alwaysOnTop: true,
        opacity: 1,
        disableAutoHideCursor: true, 
        title: "LucentNote",
        webPreferences: {
          nodeIntegration: true, 
          contextIsolation: false, 
          enableRemoteModule: true
      }
    })
    win.loadFile('src\\index.html')
    w = win;
   }
app.whenReady().then(() => {
  createWindow()
  globalShortcut.register('CommandOrControl+1', () => {
    isClickThrough = !(isClickThrough);
    console.log('CommandOrControl+1 is pressed\nClick Through: ' + isClickThrough);
    w.setIgnoreMouseEvents(isClickThrough);
  })
})

ipcMain.on("Opacity", function(event, arg){
  console.log(arg)
  w.setOpacity(arg)
})

app.on('window-all-closed', () => {
  globalShortcut.unregisterAll()
    if (process.platform !== 'darwin') app.quit()
  })


