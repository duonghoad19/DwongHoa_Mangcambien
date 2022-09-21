var valueTemp = 0;
function hamdoimau(evt){
    var backgroundDiv = document.getElementById("content");
    var arr = ['black', 'brown', 'gray','yellow','orange',"red",
    "pink","purple","#cc0171","green",'darkgreen'];
    backgroundDiv.style.background = arr[evt.target.value]
}
