const header=document.querySelector('.headermain');
 window.addEventListener('scroll',() => {
     if(window.scrollY>11){
         header.classList.add('headermain_scroll');
     }else{
         header.classList.remove('headermain_scroll');
     }
 })


 
 const Special=document.querySelector('.IconeMenu');//pointe l'icone d'affichage
 const pro=document.querySelector('.headerpro');
 const NavBar=document.querySelector('.testing');//affichage des elements de navigation
 const test=document.querySelectorAll('.menu');//Affichage du menu
 const  close=document.querySelector('.iconemenu');//pointe l'icone de fermerture
 
 
 




 Special.addEventListener('click',()=>{
     pro.classList.add('defiler');
    pro.classList.remove('filer');
    close.classList.add('iconemenu_affichage');
    NavBar.classList.remove('testing');
    NavBar.classList.add('testing_new');
    


 })


 close.addEventListener('click',()=>{
     pro.classList.remove('defiler');
     pro.classList.add('filer');
     NavBar.classList.remove('testing_new');
     NavBar.classList.add('testing');
     close.classList.remove('iconemenu_affichage');
 })
 




 //Mail party//
 
function SendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "clementlekane1@gmail.com",
        Password : "wkhl11072006",
        To : "clementlekane7@gmail.com",
        From : document.getElementById('address').value,
        Subject:"",
        Body:"Name:"+ document.getElementById('name').value
        +"<br> Email: "+document.getElementById('address').value
        +"<br> Phone N°: "+document.getElementById('number').value
        +"<br> Message: "+document.getElementById('message').value
    }).then(
        message =>alert("The Message has been sent succesfully :-)")
    );
}
