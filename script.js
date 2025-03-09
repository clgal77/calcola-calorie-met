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
    let met;

    // Nuova formula MET più accurata
    if (velocita < 5) {
        // Camminata lenta
        met = 2.0 + (0.2 * velocita) + (2.0 * velocita * pendenza);
    } else if (velocita < 8) {
        // Camminata veloce / corsa leggera
        met = 3.5 + (0.3 * velocita) + (2.5 * velocita * pendenza);
    } else {
        // Corsa intensa
        met = 6.0 + (0.4 * velocita) + (3.0 * velocita * pendenza);
    }

    met = met.toFixed(2);
    let calorieBruciate = (met * peso * (durata / 60)).toFixed(2);

    document.getElementById("risultato").innerHTML = `Calorie Bruciate: ${calorieBruciate} kcal<br>Valore MET: ${met}`;
}