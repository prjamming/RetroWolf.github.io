function start() {
  
  ////MADE FOR VERSION 0.12.0 SCRIPT SYSTEM////

  ////CONFIG////

  var link = "https://kdata1.com/2015/9/stick-fight-2/"; // link to app webpage
  var id = "https://retrowolf.github.io/clockwork/sf2.js"; // set this to the url location of your script
  
  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = "<img src=\"https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + link + "&size=24\"width=\"24px\" height=\"24px\">";  
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();