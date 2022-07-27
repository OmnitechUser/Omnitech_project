const header=document.querySelector('.headermain');
 window.addEventListener('scroll',() => {
     if(window.scrollY>11){
         header.classList.add('headermain_scroll');
     }else{
         header.classList.remove('headermain_scroll');
     }
 })

 const GrandImg=document.querySelector('.grand_img');
 window.addEventListener('scroll',() => {
     if(Window.scrollY>5){
        GrandImg.classList.add('GrandImg_scroll');
     }else{
        GrandImg.classList.remove('GrandImg_scroll');
     }
 })
 
 const Special=document.querySelector('.IconeMenu');//pointe l'icone d'affichage
 const NavBar=document.querySelector('.testing');//affichage des elements de navigation
 const test=document.querySelectorAll('.menu');//Affichage du menu
 const  close=document.querySelector('.iconemenu');//pointe l'icone de fermerture
 Special.addEventListener('click',()=>{
     close.classList.add('iconemenu_affichage');
    NavBar.classList.remove('testing');
    NavBar.classList.add('testing_new');
    


 })


 close.addEventListener('click',()=>{
     NavBar.classList.remove('testing_new');
     NavBar.classList.add('testing');
     close.classList.remove('iconemenu_affichage');
 })



// alert("pour aller vers un autre lien, cliquer bien sur le mots qui s'y trouve ");


 const produit =[
     {products:document.querySelector('.produits1'),prix:150000},
     {products:document.querySelector('.produits1'),prix:150000},
     {products:document.querySelector('.produits1'),prix:150000},
     {products:document.querySelector('.produits1'),prix:150000},
     {products:document.querySelector('.produits1'),prix:150000},
     {products:document.querySelector('.produits1'),prix:150000},
//     {products:'',prix:150000},

 ]

 const search=document.querySelector('.voire');
 search.addEventListener('keyup' ,function(){
     const input= search.value;
     const result=persons.filter(item => item.products.toLocalLowerCase.includes(input));
     console.log(result);
 });