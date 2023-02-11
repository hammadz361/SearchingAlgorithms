const {app, BrowserWindow, dialog} = require('electron')
    const url = require("url");
    const path = require("path");
const { fstat } = require('fs');

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/electron-app/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      getFileFromUser();
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }
    const getFileFromUser = () => {
      debugger;
      const files = dialog.showOpenDialog({
        properties: ['openFile']
      });
      if(!files) return;
      console.log("hello", files);
    }; 
    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })