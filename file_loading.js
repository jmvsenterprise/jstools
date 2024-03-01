/*
BSD 2-Clause License

Copyright (c) 2024, J. Vrba

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

window.onload = init;

var data = "";

function init() {
  var file_loader = document.getElementById("file_loader");
  if (file_loader) {
    file_loader.addEventListener("change", loadData);
  } else {
    console.log("Couldn't find file_loader");
  }
}

function saveData() {
  var filename = "file.txt";
  var contents = "Hello world!";
  
  console.log("Saving file");
  var saver = document.createElement('a');
  saver.setAttribute('href', 'data:text/plain;charset=utf-8,' +
    encodeURIComponent(contents));
  saver.setAttribute('download', filename);
  saver.style.display = 'none';
  document.body.appendChild(saver);
  saver.click();
  document.body.removeChild(saver);
}

function loadData(event) {
  console.log("Loading data");
  var file = event.target.files[0];
  if (!file) {
    console.log("No file loaded yet");
    return;
  }
  var reader = new FileReader();
  reader.addEventListener("load", parseFile);
  reader.readAsText(file);
}

function parseFile(event) {
  data = event.target.result;
  updateDisplay();
}

function updateDisplay() {
  var display = document.getElementById("display");
  if (!display) {
    console.log("Could not find display");
    return;
  }
  display.innerHTML = data;
}
