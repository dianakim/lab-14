function loadJSON(callback, fileName) {
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType('application/json');
  xobj.open('GET', fileName, true); // pass in the path to fileName
  xobj.onreadystatechange = function () {
    if(xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText);
    }
  };
  // xobj.send(null);
}
