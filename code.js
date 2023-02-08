{
    var time= new Date
    var gio= time.getHours()
    var id,star
    if (gio>=0 && gio<8){star=1}
    if (gio>=7 && gio<15){star=8}
    if (gio>=15 && gio<=23){star=15}
    for(id=1;id<=8;id++){
        // console.log(id)
        document.getElementById("ho"+id).innerHTML=String(id+star)
        document.getElementById("hot"+id).innerHTML=String(id+star)
    }

}
function savedata(){
    console.log(document.getElementById('ho8').outerText)
}