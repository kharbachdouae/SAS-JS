let nomber1 = Number(prompt("entrez  le premier nombre"));
let operateur = prompt("entrez l'operateur (+, -, *, /)");
let nomber2 = Number(prompt("entrez  le deuxieme nombre"));
switch (operateur) {
    case "+":
        alert("resultat: " + (nomber1 + nomber2)
    );
        break;
    case "-":
        alert("resultat: " + (nomber1 - nomber2)
        );
            break;
    case "*":
        alert("resultat: " + (nomber1 * nomber2)
        );
            break;

    case "/":
        if (nomber2 === 0) {
            alert("division par zero interdite !");
        } else {
            alert("resultat: " + (nomber1 / nomber2)
            );
        }break;
    default:
        alert("Erreur operateur !"); 
    }