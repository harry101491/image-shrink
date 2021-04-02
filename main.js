const { app, BrowserWindow } = require('electron');
const env = require('./environment');

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ImageShrink',
        width: 500,
        height: 600,
        ...env
    });

    mainWindow.loadFile('./app/index.html');

    mainWindow.webContents.openDevTools();
}


app.on('ready', createMainWindow);