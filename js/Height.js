const sjekk = () => {
   let melding = "";
   let height = document.getElementById("height").value;

   if (height >= 3) {
      melding = "NB! du kan ikkje skrive inn ei høgde over 3 meter. kontakt Guinness rekordbok dersom du treng å skrive eit høgare tal";
   } else {
      melding = "Høgda er " + height + " meter";
   }
   alert(melding);
}