function start() {

  ////CONFIG////

  var link = "https://shadow-ai1.glitch.me/"; // link to app webpage
  var id = "https://retrowolf.github.io/clockwork/shadow.js"; // set this to the url location of your script
  
  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');";
  ExampleLink.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle; background-color: rgba(0, 0, 0, 0);color: black; font-size: 24px; width: 4px; text-indent: -4px;">search</span>';
  ExampleLink.className = id + "iconbtn"; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  ExampleLink.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();
