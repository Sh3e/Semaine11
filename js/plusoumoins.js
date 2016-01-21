$essai = document.getElementById("essai");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($essai.value < reponse) {
        $resultat.innerHTML = "Insuffisant !";
    }
    if ($essai.value == reponse) {
        $resultat.innerHTML = "Juste ce qu'il faut";
    }
    if ($essai.value > reponse) {
        $resultat.innerHTML = "Trop !";
    }
}

$bouton.onclick = verifier;