const ipcRenderer = require('electron').ipcRenderer;

var slider = document.getElementById("tRange");
slider.oninput = function() {
    ipcRenderer.send('Opacity', parseInt(slider.value)/100);
}

