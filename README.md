# Menu Mensa – Scuola dell'Infanzia "Don Milani"

Pagina statica (`index.html` più le traduzioni in `i18n/`) con il menu della mensa della Scuola dell'Infanzia "Don Milani", Comune di Cervia, A.S. 2026-2027.

- **Questa settimana**: i pasti della settimana in corso, con la card di oggi evidenziata
- **Menu completo**: tutte le settimane dal 15/09 al 23/12/2026, con ricerca per piatto e ritorno rapido alla settimana corrente
- Filtro multiplo per tipo di menu (vegano, vegetariano, onnivoro) e per fonte proteica principale (carne, pesce, uova, formaggi, legumi)
- Tema chiaro/scuro, entrambi verificati per contrasto WCAG AA
- Su mobile la barra di navigazione è in basso e le card scorrono in orizzontale, con oggi sempre per primo
- Per ogni piatto una scheda (freccia a destra del nome) con descrizione semplice e cosa porta nel piatto
- Su ogni giorno, in alto a destra: badge della fonte proteica principale (carne, pesce, uova, formaggi, legumi) e icona del tipo di pasto (energetico, legumi, caldo e leggero, bilanciato) con spiegazione al tocco
- 11 lingue (italiano, inglese, spagnolo, portoghese, francese, tedesco, rumeno, albanese, russo, arabo con lettura da destra a sinistra, cinese): la lingua del browser viene riconosciuta da sola e si cambia dal selettore con le bandiere in alto
- Descrizioni, fonte proteica, icone e traduzioni sono generate con l'intelligenza artificiale e indicate come tali in ogni card: sono indicative, non verificate da esperti

Fonte dei dati: [PDF ufficiale del Comune di Cervia](https://cervia-api.municipiumapp.it/s3/1994/allegati/politiche-educative/men/scuole/2627/menu-cervia-dal-15-9-al-23-12-aggiornato-16-9.pdf). Dove il PDF distingue primaria/infanzia è riportata la versione infanzia. Il tipo di menu è dedotto dai nomi dei piatti.

Per aggiornare il menu modifica l'array `DAYS` in `index.html`. Le schede dei piatti sono nell'oggetto `PIATTI` (stessa chiave del nome nel menu); le traduzioni sono in `i18n/<lingua>.json` e seguono lo stesso ordine di `PIATTI`. Un piatto nuovo senza scheda o traduzione resta visibile con il nome italiano.
