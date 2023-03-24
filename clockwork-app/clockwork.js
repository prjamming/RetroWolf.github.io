var theme = localStorage.getItem("theme");
if (theme != null) {
  addTheme(theme);
}

apps = JSON.parse(localStorage.getItem("apps"));
console.log(apps);
if (apps == null) {
  localStorage.setItem("apps", JSON.stringify(new Array()));
  var apps = new Array();
}
console.log(apps);
var arrayLength = apps.length;
for (var i = 0; i < arrayLength; i++) {
  addApp(apps[i]);
}

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

function uninstallApp(unid) {
  var apps = JSON.parse(localStorage.getItem("apps"));
  if (confirm("Are you sure you want to delete this app? You'll lose all your saved data!") == true) {
    var filtered = apps.filter(function(value, index, arr){ 
      return value != unid;
    });
    localStorage.setItem("apps", JSON.stringify(filtered));
    var apps = filtered;

    var paras = document.getElementsByClassName(unid);
    while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
  }
  apps = JSON.parse(localStorage.getItem("apps"));
  console.log(apps);
}

function openapp(appname, appurl) {
  var main = document.getElementById('main');
  for (const child of main.children) {
    child.style = "display: none;";
  }
  var appname = document.getElementById(appname);
  if (appname != null) {
    if (appname.nodeName == "IFRAME") {
      if (appname.src == "about:blank") {
        appname.src = appurl;
      }
    } 
    if (appname.id == "flashgame") {
      appname.remove();
      var appname = document.createElement("embed");
      appname.id = "flashgame";
      appname.className = "app";
      appname.src = appurl;
      document.getElementById("main").appendChild(appname);
    }
    if (appname.id == "game") {
      appname.remove();
      var appname = document.createElement("iframe");
      appname.id = "game";
      appname.className = "app";
      appname.style = "width: 100%; height: calc(100vh - 36px); border: none;";
      appname.src = appurl;
      document.getElementById("main").appendChild(appname);
    }

    appname.style = "display: block;";
  } else {
    alert("// ERROR \nApp of name does not exist");
  }
}

function closeApp(appname) {
  var appname = document.getElementById(appname);
  if (appname != null) {
    if (appname.nodeName == "IFRAME") {
      appname.src = "about:blank";
    } 

    appname.style = "display: none;";
  } else {
    alert("// ERROR \nApp of name does not exist");
  }
}
//https://sub64.netlify.app/clockwork-beta/clock2.css

function addApp(scr) {
  var scriptelem = document.createElement("script");
  scriptelem.src = scr;
  document.body.appendChild(scriptelem);
  var aelem = document.createElement("a");
  aelem.href = "javascript:uninstallApp('"+scr+"');";
  aelem.innerHTML = scr + "<br>";
  aelem.className = "consolea " + scr;
  document.getElementById("applist").appendChild(aelem);
}

function installApp(appscript) {
  openapp('appstoreinstalling','mongus');
  if (appscript == null) {
    var appscript = prompt("Enter the URL of your custom script.");
  }
  if (apps.includes(appscript) == true) {
    alert("App is already installed!");
  } else {
    apps.push(appscript);
    addApp(appscript);
    localStorage.setItem("apps", JSON.stringify(apps));
    console.log(apps);
  }
  openapp('appstore','mongus');
}
function sschk(element) {
  if (element.className != "donotremove-ss") {
    element.remove();
  }
}

function addTheme(ss) {
  if (ss == null) {
    ss2 = prompt("Enter the link to the stylesheet.css file.");
  } else {
    ss2 = ss;
  }
  document.querySelectorAll('style,link[rel="stylesheet"]')
  .forEach(element => sschk(element));

  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = ss2;

  document.body.appendChild(link);
  
  var theme = ss2;
  localStorage.setItem("theme", theme);
}

function startLoop() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('extra').innerHTML =  h + ":" + m + ":" + s;

  apps = JSON.parse(localStorage.getItem("apps"));
  
  setTimeout(startLoop, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function unhide() {
  document.body.style = "display:block;";
  document.getElementById("loadingtxt").remove();
}

function factoryReset() {
  if (confirm("Are you ABSOLUTELY SURE you want to factory reset Clockwork?\nAll your themes and apps (and some data) will be gone!")) {
    localStorage.setItem("theme", null);
    localStorage.setItem("apps", null);
    document.location.reload();
  }
}

setTimeout(unhide, 1500);

function showMenu() {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "block") {
    hideMenu();
  } else {
    document.getElementById("unins-cm").href = "javascript:alert('"+v.className+"');";
    var menu = document.getElementById("contextMenu");

    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}
document.onclick = hideMenu;