const turnOnOff=document.getElementById('on/off')
const lamp=document.getElementById('lamp');

function lampOn(){
    lamp.src='img/ligada.jpg'
}
function lampOff(){
    lamp.src='img/desligada.jpg'
}
function lampbreak(){
    lamp.src='img/quebrada.jpg'
}

function lampOnOff(){
    if(turnOnOff.textContent=='Ligar'){
    
        lampOn()
        turnOnOff.textContent='Desligar'
    }
 else{ 
    lampOff()
turnOnOff.textContent='Ligar'
}}
turnOnOff.addEventListener('click',lampOnOff)

   lamp.addEventListener('dblclick',lampbreak)
   lamp.addEventListener('mouseover',lampOn)
   lamp.addEventListener('mouseleave',lampOff)












