const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

app.on('ready', v => {
  let option = {
    transparent: true,
    frame: false,
    width: 1280+10,
    height: 720+10
  }
  let win = new BrowserWindow(option)
  win.on('closed', () => {
    win = null
    app.quit()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  win.show()
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'abc.html'),
    protocol: 'file:',
    slashes: true
  }))
})
