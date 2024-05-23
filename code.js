//g bùn
var x=screen.width
var y=screen.height
var k_hso,k_naoh,heso_V
var data_mau={}
set_mau_g()
cptn()
chiphi_sx(1)
chiphi_pl()
var link_gsheet = "https://docs.google.com/forms/d/e/1FAIpQLScR3iECFN_knhGaC_2z2RQXIQU7bYVr__ZmgcQCeFtB46d0LQ/formResponse?entry.1895639889="
// const base = 'https://docs.google.com/document/d/1sRPz1WkG2wus-wflWxaaGCWkpm134HZRaPqDixZi0Xg';
// const base = "https://spreadsheets.google.com/feeds/cells/1-X4iFWGHBIXGQkTXtrzWUU8F8xnRV2H-4fGmRDWKFeg/1/public/full?alt=json"
const data = []
// fetch(base)
//       .then(res => res.text())
//       .then(rep => {
// console.log(base.textContent)
//       })
// document.getElementById("myframe").width = x
// document.getElementById("myframe").height = y
document.getElementById('md_pilot').checked = true  
document.getElementById('md_sx').checked = false
var num_fix=0

//setup start
var ar_gam=[400,300,260,200,150,130,134,100,87]
heso_V=1
{
  //bang luu luong
  var table = document.getElementById("thung_do");
  var str_data="",i
  for (i=1;i<=10;i++){
  var row = table.insertRow(-1);
    str_data=
      '<td id="c'+i+'_1"></td>'+
      '<td id="c'+i+'_2"></td>'+
      '<td id="c'+(i+10)+'_1"></td>'+
      '<td id="c'+(i+10)+'_2"></td>'
    row.innerHTML=str_data

  }
  set_luulg(0)
  check_ll(1)

  //tuyển
  // var ar_tuyen=['giờ','nd vào','nd thải','Mức','M','N','lọc','Bùn T(P2O5)','cấp hạt (%)','thuốc pha']
  // var table = document.getElementById("tb_tuyen");
  // str_data="",dt="",temp="",i
  // dt='<tr>'+
  //   '<td><a style="color:red;font-size: 60pt;" id1>vl</a></td>'+
  //   '<td><input style="width:90%;font-size: 60pt; " type="number" id2></td>'+
  //   '</tr>'
  // for (i=0;i<ar_tuyen.length;i++){
  //   temp=dt.replace("id1","id=t1-"+ i).replace("id2","id=t2-" +i).replace("vl",ar_tuyen[i])
  //   if(i==9){
  //      temp=temp.replace("number","text")
  //   }
  //   str_data+=temp
  // }
  // table.innerHTML= table.innerHTML +str_data  
  //chia bùn
  var table = document.getElementById("table_gam");
  var row,i
  for (i=0;i<ar_gam.length;i++){
  var row = table.insertRow(-1);
  row.innerHTML=
  '<td><input class="f_size_tronmau" type="number" value="'+ar_gam[i]+'" id="gam'+(i+1)+'" onchange="chia_bun('+(i+1)+')"></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-1" >0</label></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-2" >0</label></td>'+
  '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-3" >0</label></td>'
  }

}

document.getElementById("defaultOpen").click();
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
  // evt.currentTarget.className += " active";
}

function check_ll(a){ //mode luu luong
  var num_fix=0
  if (a==1){
    document.getElementById('md_pilot').checked = false
    document.getElementById('V_thung').value = "5000"
    document.getElementById('V1').value = "100"
    document.getElementById('do_chia').value = "100"
  }
  if (a==2){
    document.getElementById('md_sx').checked = false
    document.getElementById('V_thung').value = "50"
    document.getElementById('V1').value = "4"
    document.getElementById('do_chia').value = "0.1"
    num_fix=2
  }
  set_luulg(num_fix)

}

function set_luulg(num){
  if (num!=undefined) {num_fix=num}
  // console.log(num_fix)
  var V,ll,deli,sec
  heso_V=1000
  // if (document.getElementById("the_tich").value=2) {heso_V=1000}
    V= document.getElementById("V_thung").value /heso_V
    min= document.getElementById("V1").value
    deli= parseFloat(document.getElementById("do_chia").value)
    ll=min-deli
    for (var i=1;i<=20;i++){
      ll=ll+deli
      sec=(3600/ll)*V
      document.getElementById("c"+i+"_1").innerHTML =ll.toFixed(num_fix) 
      document.getElementById("c"+i+"_2").innerHTML =sec.toFixed(2) 
    }
}

// function getsheet(){
//   // console.log(data)
//   document.getElementById("naoh").value =data[0][0]
//   document.getElementById("hso").value =data[1][0]
// }


// function set_caphat(num){
//   var am,tong,res,ten
//     ten= document.getElementById("ch_name_" +num).value
//     am= document.getElementById("ch_am_"+num).value
//     tong= document.getElementById("ch_tong_"+num).value      
//     console.log(am+"_"+tong)
//     res=Math.floor((am/tong)*10000)/100
//     console.log(res)
//     document.getElementById("ch_res_"+num).innerHTML=res

// }

function set_mau_g(){
  var m,mau,v,mb,d,bi,r
    d= document.getElementById("d").value
    mau= document.getElementById("kl_bun").value
    m= document.getElementById("m_g").value
    v= document.getElementById("v_ml").value
    mb= document.getElementById("m_binh").value
    // bi= parseInt(document.getElementById("m_bi").value)
    r=((((d*v)/(m-mb)-d)/(1-d))*100).toFixed(2)
    document.getElementById("r").innerHTML =r
    // document.getElementById("bun_can").innerHTML =Math.floor((mau*100)/r)
    // document.getElementById("bun_can3").innerHTML =Math.floor((mau*100)/r)+bi
    // save_bun()
}
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
    // console.log(i)
    document.getElementById("mau" +i).value= Object.values(data_mau)[i-1]
    str_mau="<option selected disabled>tên mẫu</option>"
    set_nd(i)
  }

}
function set_nd(num) {
  document.getElementById("r"+num).value=document.getElementById("mau"+num).value
  chia_mau(num)
}

function chia_mau(num) {
  var j,gam,r,m_bun,del_r
  del_r = document.getElementById("delta_r").value*0.01;
  for (j=1;j<=ar_gam.length;j++){
    gam = document.getElementById("gam"+j).value;
    // console.log(gam)
    r= document.getElementById("r"+num).value
    if (r){
      m_bun=((gam*100)/r).toFixed(0)
      m_bun=parseInt(m_bun)+ parseInt(m_bun*del_r)
      document.getElementById("g"+j+"-"+num).innerHTML=parseInt(m_bun)
      // console.log(gam+"_"+r+"_"+(gam*100)/r)
    }
  }
}
function chia_bun(num) {
  var gam,r;
  var i,j
  if (num==""){num=ar_gam.length+1}
  // console.log(num)
  for (j=1;j<=num;j++){
    gam = document.getElementById("gam"+j).value;
    // console.log(gam)
    for (i = 1; i < 4; i++) {
      r= document.getElementById("mau"+i).value
      if (r!=""){
        // console.log(r)
        document.getElementById("g"+j+"-"+i).innerHTML=((gam*100)/r).toFixed(0)
        // console.log((gam*100)/r)
      }
    }
  }
}

function cptn(){
  var mau
    mau= document.getElementById("kl_bun").value
    document.getElementById("ttl_gt").value =500
    document.getElementById("xut_gt").value =200
    document.getElementById("tth_gt").value =300
    chiphi_thuoc(mau)
}

function set_chiphi(){
  var chiphi,mau
  chiphi= document.getElementById("chiphi").value
  console.log(chiphi)
  if (chiphi.includes("-")){chiphi=chiphi.replace("-","_")}
  if (!chiphi.includes("_")){return}
  chiphi=chiphi.split("_")  
  document.getElementById("ttl_gt").value =chiphi[0]
  document.getElementById("xut_gt").value =chiphi[1]
  document.getElementById("tth_gt").value =chiphi[2]
  mau= document.getElementById("kl_bun").value
  chiphi_thuoc(mau)
}
function mode_sx(){
  var tth,ttl,xut,mau
    mau= document.getElementById("kl_bun").value
    ttl= document.getElementById("ttl_sx").value
    xut= document.getElementById("xut_sx").value
    tth= document.getElementById("tth_sx").value
    document.getElementById("ttl_gt").value =(Math.floor(ttl/10)+1)*10
    document.getElementById("xut_gt").value =(Math.floor(xut/5)+1)*5
    document.getElementById("tth_gt").value =(Math.floor(tth/10)+1)*10
    chiphi_thuoc(mau)

}

function chiphi_sx(num){
  var tth,ttl,xut,tth_r,ttl_r,xut_r,tth_ml,ttl_ml,xut_ml,ns
    ns= document.getElementById("ns").value
    ttl_r= document.getElementById("ttl_r").value
    xut_r= document.getElementById("xut_r").value
    tth_r= document.getElementById("tth_r_sx").value

  if (num==1){
    ttl= document.getElementById("ttl_ll").value
    xut= document.getElementById("xut_ll").value
    tth= document.getElementById("tth_ll").value
    ttl_ml= (ttl*ttl_r*10)/ns
    xut_ml= (xut*xut_r*10)/ns
    tth_ml= (tth*tth_r*10)/ns
    document.getElementById("ttl_sx").value =ttl_ml.toFixed(0)
    document.getElementById("xut_sx").value =xut_ml.toFixed(0)
    document.getElementById("tth_sx").value =tth_ml.toFixed(0)
  }
  else{
    ttl= document.getElementById("ttl_sx").value
    xut= document.getElementById("xut_sx").value
    tth= document.getElementById("tth_sx").value
    ttl_ml= (ns*ttl)/(ttl_r*10)
    xut_ml= (ns*xut)/(xut_r*10)
    tth_ml= (ns*tth)/(tth_r*10)
    document.getElementById("ttl_ll").value =ttl_ml.toFixed(0)
    document.getElementById("xut_ll").value =xut_ml.toFixed(0)
    document.getElementById("tth_ll").value =tth_ml.toFixed(0)
  }
}

function chiphi_pl(){
  var tth,ttl,xut,tth_r,ttl_r,xut_r,tth_ml,ttl_ml,xut_ml,ns
    ns= 0.000001* document.getElementById("ns_pilot").value
    ttl= document.getElementById("ttl_gt").value
    xut= document.getElementById("xut_gt").value
    tth= document.getElementById("tth_gt").value
    ttl_r= document.getElementById("ttl_r_pilot").value
    xut_r= document.getElementById("xut_r_pilot").value
    tth_r= document.getElementById("tth_r_pilot").value
    ttl_ml= (ttl*ns)/(ttl_r/100)
    xut_ml= (xut*ns)/(xut_r/100)
    tth_ml= (tth*ns)/(tth_r/100)
    document.getElementById("ttl_pilot").innerHTML =ttl_ml.toFixed(2)
    document.getElementById("xut_pilot").innerHTML =xut_ml.toFixed(2)
    document.getElementById("tth_pilot").innerHTML =tth_ml.toFixed(2)
}

function chiphi_thuoc(mau_g){
  var tth,ttl,xut,tth_r,ttl_r,xut_r,tth_ml,ttl_ml,xut_ml
    ttl= document.getElementById("ttl_gt").value
    xut= document.getElementById("xut_gt").value
    tth= document.getElementById("tth_gt").value
    ttl_r=document.getElementById("ttl_r").value
    xut_r= document.getElementById("xut_r").value
    tth_r= document.getElementById("tth_r").value
    ttl_ml= (ttl*0.000001*mau_g)/(ttl_r/100)
    xut_ml= (xut*0.000001*mau_g)/(xut_r/100)
    tth_ml= (tth*0.000001*mau_g)/(tth_r/100)
    document.getElementById("ttl_ml").innerHTML =ttl_ml.toFixed(2)
    document.getElementById("xut_ml").innerHTML =xut_ml.toFixed(2)
    document.getElementById("tth_ml").innerHTML =tth_ml.toFixed(2)
}

function change_thuoc(name){
  var gam_tan,r,ml,m_bun,ns
    m_bun= document.getElementById("kl_bun").value
    gam_tan= document.getElementById(name+"_gt").value
    r= document.getElementById(name+"_r").value
    ml= (gam_tan*0.000001*m_bun)/(r/100)
    console.log(ml)
    document.getElementById(name+"_ml").innerHTML =ml.toFixed(2)
    if (name!="tth"){
      var ll= document.getElementById(name+"_ll").value
      ns= document.getElementById("ns").value
      ml= (ll*r*10)/ns
      document.getElementById(name+"_sx").value =ml.toFixed(0)
    }
    chiphi_pl()
}

function save_thuoc(){
  var table = document.getElementById("table_hc");
  var row,ten_tn,gram,cp1,cp2,cp3,temp
  var ar_cp=[]
  var row = table.insertRow(-1);
  ten_tn=document.getElementById("ten_tn").value;
  gram=document.getElementById("kl_bun").value;
  cp1=document.getElementById("ttl_gt").value +"_"+document.getElementById("xut_gt").value+"_"+document.getElementById("tth_gt").value
  cp2=document.getElementById("ttl_ml").textContent+"_"+document.getElementById("xut_ml").textContent+"_"+document.getElementById("tth_ml").textContent
  cp3=cp1+'<br>'+cp2
  temp='<tr><td class="f_size_chiphi">v1</td><td class="f_size_chiphi">v2</td><td class="f_size_chiphi">v3</td>'

  temp=temp.replace("v1",ten_tn)
  .replace("v2",gram)
  .replace("v3",cp3)
  row.innerHTML=temp  // console.log(ten_tn)
}
// function set_tuyen(){
//   var vl,i,ar=[]
//   for (i=0;i<=9;i++){
//     vl=document.getElementById("t2-"+ i).value
//     ar.push(vl)
//   }
//   vl = link_gsheet + "TUYEN"+ar.join(" ") + "&submit=Submit"
//   const xhr = new XMLHttpRequest();
//   xhr.open("get", vl,true);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.send();
//   // console.log(ar)
// }
