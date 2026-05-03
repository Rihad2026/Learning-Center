const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('Learning_center_desktop.html')
  // মেনু বার হাইড করতে চাইলে নিচের লাইনটি ব্যবহার করতে পারেন
  win.setMenuBarVisibility(false) 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
