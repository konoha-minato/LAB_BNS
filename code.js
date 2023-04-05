//g bùn
var x=screen.width
var y=screen.height
var k_hso,k_naoh
var data_mau={}
set_mau_g()
chiphi_sx()
//set row bun
var ar_gam=[350,300,260,175,150,130,117,100,87]
{
  var table = document.getElementById("table_gam");
  var row,i
  for (i=0;i<ar_gam.length;i++){
  var row = table.insertRow(-1);
  row.innerHTML=
  '<td><input class="f_size_tronmau" type="number" value="'+ar_gam[i]+'" id="gam'+i+'" onchange="chia_bun('+(i+1)+')"></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-1" >260</label></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-2" >260</label></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-3" >260</label></td>'
  }
}
document.getElementById("defaultOpen").click();
document.getElementById("naoh").addEventListener("keyup",function(e){
  if (e.keyCode == 13) {
    k_naoh=document.getElementById("naoh").value
    k_hso=document.getElementById("hso").value
    console.log(k_naoh+"_"+k_hso)
    }
});
{
  
}
//get data from gsheet
// google.script.run.withSuccessHandler(getsheet).get_data();
function getsheet(){
  
  // console.log(data)
  document.getElementById("naoh").value =data[0][0]
  document.getElementById("hso").value =data[1][0]
}

function set_mau_g(){
  var m,mau,v,mb,d,bi,r,ttl_r
    d= document.getElementById("d").value
    mau= document.getElementById("mau_g").value
    m= document.getElementById("m_g").value
    v= document.getElementById("v_ml").value
    mb= document.getElementById("m_binh").value
    bi= parseInt(document.getElementById("m_bi").value)
    r=((((d*v)/(m-mb)-d)/(1-d))*100).toFixed(2)
    document.getElementById("r").innerHTML =r
    document.getElementById("bun_can").innerHTML =Math.floor((mau*100)/r)
    document.getElementById("bun_can3").innerHTML =Math.floor((mau*100)/r)+bi
    chiphi_thuoc (mau)
}

function set_pt(num){
  var ten, naoh,hso,res
    k_naoh=document.getElementById("naoh").value
    k_hso=document.getElementById("hso").value
    ten= document.getElementById("pt_name_" +num).value
    naoh= document.getElementById("pt_xut_" +num).value      
    hso= document.getElementById("pt_axit_" +num).value
    res=Math.floor(k_naoh*naoh*100)-Math.floor(k_hso*hso*0.1*100)
    res=res/100
    // console.log(k_naoh+"_"+k_hso)
    document.getElementById("pt_res_" +num).innerHTML = (0.01*parseInt(k_naoh*naoh*100)).toFixed(2)+","+(0.01*parseInt(k_hso*hso*0.1*100)).toFixed(2) +"_"+res
    // if (ten!=""){google.script.run.addEvent([ten,"P2O5",res])};
}

function set_caphat(num){
  var am,tong,res,ten
    ten= document.getElementById("ch_name_" +num).value
    am= document.getElementById("ch_am_"+num).value
    tong= document.getElementById("ch_tong_"+num).value      
    console.log(am+"_"+tong)
    res=Math.floor((am/tong)*10000)/100
    console.log(res)
    document.getElementById("ch_res_"+num).innerHTML=res
    // if (ten!=""){google.script.run.addEvent([ten,"CH",res])};

}
function check(){ //mode tth
  var log= document.getElementById("tth").checked
  if (log==true){
    document.getElementById('tth_mode').innerHTML = "TTH PHA"
    document.getElementById('tth_r').innerHTML = "1"
  } else {
    document.getElementById('tth_mode').innerHTML = "TTH SX"
    document.getElementById('tth_r').innerHTML = "1.2"
  }
  //tinh thuoc
  chiphi_thuoc (document.getElementById("mau_g").value)

}

function chiphi_thuoc(mau_g){
  var tth,ttl,xut,tth_r,ttl_r,xut_r,th_ml,ttl_ml,xut_ml
    ttl= document.getElementById("ttl_gt").value
    xut= document.getElementById("xut_gt").value
    tth= document.getElementById("tth_gt").value
    ttl_r= Number(document.getElementById("ttl_r").textContent)
    xut_r= Number(document.getElementById("xut_r").textContent)
    tth_r= Number(document.getElementById("tth_r").textContent)
    ttl_ml= (ttl*0.000001*mau_g)/(ttl_r/100)
    xut_ml= (xut*0.000001*mau_g)/(xut_r/100)
    tth_ml= (tth*0.000001*mau_g)/(tth_r/100)
    document.getElementById("ttl_ml").innerHTML =ttl_ml.toFixed(2)
    document.getElementById("xut_ml").innerHTML =xut_ml.toFixed(2)
    document.getElementById("tth_ml").innerHTML =tth_ml.toFixed(2)
}
function chiphi_sx(){
  var tth,ttl,xut,tth_r,ttl_r,xut_r,th_ml,ttl_ml,xut_ml,mau,ns
    ns= document.getElementById("ns").value
    mau= document.getElementById("mau_g").value
    ttl= document.getElementById("ttl_ll").value
    xut= document.getElementById("xut_ll").value
    tth= document.getElementById("tth_ll").value
    ttl_r= Number(document.getElementById("ttl_r").textContent)
    xut_r= Number(document.getElementById("xut_r").textContent)
    tth_r= Number(document.getElementById("tth_r").textContent)
    ttl_ml= (ttl*ttl_r*10)/ns
    xut_ml= (xut*xut_r*10)/ns
    tth_ml= (tth*tth_r*10)/ns
    document.getElementById("ttl_sx").innerHTML =Math.floor(ttl_ml)
    document.getElementById("xut_sx").innerHTML =Math.floor(xut_ml)
    document.getElementById("tth_sx").innerHTML =Math.floor(tth_ml)
}

function mode_sx(){
  var tth,ttl,xut,mau
    mau= document.getElementById("mau_g").value
    ttl= Number(document.getElementById("ttl_sx").textContent)
    xut= Number(document.getElementById("xut_sx").textContent)
    tth= Number(document.getElementById("tth_sx").textContent)
    document.getElementById("ttl_gt").value =(Math.floor(ttl/10)+1)*10
    document.getElementById("xut_gt").value =(Math.floor(xut/5)+1)*5
    document.getElementById("tth_gt").value =(Math.floor(tth/10)+1)*10
    chiphi_thuoc(mau)

}
function cptn(){
  var mau
    mau= document.getElementById("mau_g").value
    document.getElementById("ttl_gt").value =500
    document.getElementById("xut_gt").value =200
    document.getElementById("tth_gt").value =300
    chiphi_thuoc(mau)
}
function set_tab(name_tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tb1");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name_tab).style.display = "block";
  evt.currentTarget.className += " active";
}

function set_nd(num) {
  // console.log(data_mau)
  document.getElementById("r"+num).value=document.getElementById("mau"+num).value
  // console.log(document.getElementById("mau"+num).value)
  chia_mau(num)
}

function chia_mau(num) {
  var j
  for (j=1;j<=ar_gam.length+1;j++){
    gam = document.getElementById("gam"+j).value;
    r= parseInt(document.getElementById("r"+num).value)
    document.getElementById("g"+j+"-"+num).innerHTML=(gam*100/r).toFixed(0)
    // console.log(gam)    
  }
}

function chia_bun(num) {
  var gam,r;
  var i,j
  if (num==""){num=ar_gam.length+1}
  console.log(num)
  for (j=1;j<=num;j++){
    gam = document.getElementById("gam"+j).value;
    // console.log(gam)
    
    for (i = 1; i < 4; i++) {
      r= parseInt(document.getElementById("r"+i).value)
      // console.log(d)
      if (r!=""){
      document.getElementById("g"+j+"-"+i).innerHTML=(gam*100/r).toFixed(0)    
      }
    }
  }
}

//save to gsheet

// function save_thuoc(){
//   var vl1,vl2,vl3,vl4,vl5
//   vl1 = document.getElementById("ten_tn").value;
//   vl2 = document.getElementById("ttl_gt").value;
//   vl3 = document.getElementById("xut_gt").value;
//   vl4 = document.getElementById("tth_gt").value;
//   vl5 = document.getElementById("des_tn").value;
//   var res=[vl2,vl3,vl4].join("_")
//   data=[vl1,vl5,res]
// }

function save_bun(){
  var name,vl,str_mau
  var i,j
  str_mau="<option selected disabled>tên mẫu</option>"
  name = document.getElementById("ten_mau").value;
  vl= document.getElementById("r").textContent;
  data_mau[name]=vl
  // console.log(data_mau)
  for (i=1;i<4;i++){
      for (j in data_mau){
        str_mau=str_mau +'<option value="'+data_mau[j]+'">'+j+'</option>'
        document.getElementById("mau" +i).innerHTML= str_mau
      }
      document.getElementById("mau" +i).value= Object.values(data_mau)[i-1]
      str_mau="<option selected disabled>tên mẫu</option>"
      set_nd(i)
  }

}

// function save_note(){
//   var name,vl
//   name = document.getElementById("note_sub").value;
//   vl= document.getElementById("note_content").textContent;
//   data=[name,vl]
// }

