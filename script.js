function calcolaCalorie() {
    let peso = parseFloat(document.getElementById("peso").value);
    let distanza = parseFloat(document.getElementById("distanza").value);
    let durata = parseFloat(document.getElementById("durata").value);
    let pendenza = parseFloat(document.getElementById("pendenza").value) / 100;

    if (isNaN(peso) || isNaN(distanza) || isNaN(durata) || isNaN(pendenza) || peso <= 0 || distanza <= 0 || durata <= 0) {
        document.getElementById("risultato").innerHTML = "Inserisci valori validi!";
        return;
    }

    let velocita = distanza / (durata / 60);
    let met = (1.5 + (0.1 * velocita) + (1.8 * velocita * pendenza)).toFixed(2);
    let calorieBruciate = (met * peso * (durata / 60)).toFixed(2);

    document.getElementById("risultato").innerHTML = `Calorie Bruciate: ${calorieBruciate} kcal<br>Valore MET: ${met}`;
}