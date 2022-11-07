var panels = document.querySelectorAll(".panels");
   // console.log(panels);


function scroll_handler() { // handler = getionnaire

   // on s'assure de connaitre la distance scrollée dans 
   // la fenetre (ouvrir la
   // la console pour voir)
   //  console.log(window.scrollY); 

 //test a t on scrollé une hauteur de fenétre ou plus?
if (window.scrollY >= window.innerHeight){

    document.body.classList.add("scrolled") ; /*ajout de
    la classe "scrolled" sur le body.*/

   }else{

document.body.classList.remove("scrolled");
// on enlève cette classe si on est remonté au-dessus du seuil

}

var panel_on_screen;

panels.forEach(function(the_panel){
   // forEach a besoin, comme paramètre, d'une fonction.
   // Celle-ci s'exécutera à chaque itération (passage) de la boucle.
   // Si on donne à cette fonction au moins un paramètre, celui-ci deviendra,
   // dans la fonction, une manière d'accéder à l'élément concerné par l'itération.
   if (window.scrollY >= the_panel.offsetTop){
      // A-t-on scrollé au moins jusqu'à avoir the_panel calé
      // en haut de la fenêtre ?

      panel_on_screen = the_panel;

   }

 });

 // Après le forEach, la variable panel_on_screen fait référence
 // au bon élément : le dernier qui a pu valider le test dans
 // le forEach


 var panel_id = panel_on_screen.id;
 console.log("Le .panel d'identifiant " + panel_id + " est à l'écran");

 var the_link =  document.querySelector("a[href='#" + panel_id + "']");

 the_link.style.color = "orange";
}



window.onscroll = scroll_handler; 



