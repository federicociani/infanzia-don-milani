# Menu Mensa – Scuola dell'Infanzia "Don Milani"

Pagina statica (un solo `index.html`) con il menu della mensa della Scuola dell'Infanzia "Don Milani", Comune di Cervia, A.S. 2026-2027.

- **Questa settimana**: i pasti della settimana in corso, con la card di oggi evidenziata
- **Menu completo**: tutte le settimane dal 15/09 al 23/12/2026, con ricerca per piatto e ritorno rapido alla settimana corrente
- Filtro multiplo per tipo di menu (pesce, carne, uova, formaggi, pizza, piatto unico, verdure)
- Tema chiaro/scuro, entrambi verificati per contrasto WCAG AA
- Su mobile la barra di navigazione è in basso e le card scorrono in orizzontale, con oggi sempre per primo

Fonte dei dati: [PDF ufficiale del Comune di Cervia](https://cervia-api.municipiumapp.it/s3/1994/allegati/politiche-educative/men/scuole/2627/menu-cervia-dal-15-9-al-23-12-aggiornato-16-9.pdf). Dove il PDF distingue primaria/infanzia è riportata la versione infanzia. Il tipo di menu è dedotto dai nomi dei piatti.

Per aggiornare il menu modifica l'array `DAYS` in `index.html`.
