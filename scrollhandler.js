var panels = document.querySelectorAll(".panels");
   // console.log(panels);

   // Définition de the_link. Voir Solution 2 (ligne 61)
var the_link; // A chaque scroll, cette variable globale sera mise à jour : elle fera alors réference au dernier lien ayant pris la couleur orange

function scroll_handler() { // handler = getionnaire

   // on s'assure de connaitre la distance scrollée dans 
   // la fenetre (ouvrir la
   // la console pour voir)
   //  console.log(window.scrollY); 

 //test a t on scrollé une hauteur de fenétre ou plus?
if (window.scrollY >= window.innerHeight){

    document.body.classList.add("scrolled"); /*ajout de
    la classe "scrolled" sur le body.*/

   }else{

document.body.classList.remove("scrolled");
// on enlève cette classe si on est remonté au-dessus du seuil

}

// Fonctionnalité 2 : faire réagir les éléments du menu lorsque le panneau correspondant est à l'écran.

// Compléter cette fonctionnalité:
// avant que la couleur du bon lien soit changée, il faudrait s'assurer que tous les
// liens correspondant à un .panel perdent leur modification de couleur. On peut considérer cela comme un "remise à zéro" de l'état des liens, à faire à chaque scroll (donc dans cette fonction scroll_handler). Pour être sûr d'agîr sur chaque lien possiblement concerné, on peut profiter du passage en revue des .panel (depuis un .panel on peut retrouver le lien correspondant, voir plus haut).

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

   

    // Correction Bug : 

   // 1) Désigner ici le lien correspondant à ce panneau
   // 2) Le lien peut, d'office, perdre sa stylisation de couleur
 

   // Solution 1 :

   // var link_to_desactivate =  document.querySelector("a[href='#" + the_panel.id + "']");
   // link_to_desactivate.style.color = "";

   // solution 2 (à conditiond 'avoir déclaré the_link de manière globale):

   if (the_link){ // Permet de tester si the_link n'est pas undefined (et d'éviter un bug)
   the_link.style.color = "";
}
 });

 // Après le forEach, la variable panel_on_screen fait référence
 // au bon élément : le dernier qui a pu valider le test dans
 // le forEach


 var panel_id = panel_on_screen.id;



 console.log("Le .panel d'identifiant " + panel_id + " est à l'écran");

 the_link =  document.querySelector("a[href='#" + panel_id + "']");

 the_link.style.color = "orange";
}


window.onscroll = scroll_handler; 



