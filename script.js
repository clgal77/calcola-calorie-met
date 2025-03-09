function calcolaCalorie() {
    let peso = parseFloat(document.getElementById("peso").value);
    let met = parseFloat(document.getElementById("attivita").value);
    let durata = parseFloat(document.getElementById("durata").value);

    if (isNaN(peso) || isNaN(met) || isNaN(durata) || peso <= 0 || durata <= 0) {
        document.getElementById("risultato").innerHTML = "Inserisci valori validi!";
        return;
    }

    let calorieBruciate = (met * peso * (durata / 60)).toFixed(2);
    document.getElementById("risultato").innerHTML = `Calorie Bruciate: ${calorieBruciate} kcal`;
}