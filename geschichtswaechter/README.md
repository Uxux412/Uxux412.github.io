# Geschichtswächter – Die Quellen-Chronik

8-Bit-Runner mit Geschichtsquiz zur deutschen Geschichte 1945–1949
(Gymnasium Baden-Württemberg, Kursstufe, Bildungsplan 2016, 12.1 „West- und Osteuropa nach 1945“).

Spur = Antwort: Wer eine Schranke erreicht, lenkt sich in die Spur der richtigen Antwort.
Dazu kommen Quellenfragen, Urteilsfragen ohne richtige Lösung und zwei Tafelbild-Schlösser
(Potsdamer Konferenz, doppelte Staatsgründung mit Kausalverknüpfungen).
Am Ende zeigt eine Auswertung alle Fehler mit Erklärung und die gewählten Positionen zum Diskutieren.

## Spielen

- Browser: `index.html` öffnen oder über GitHub Pages aufrufen.
- Handy: im Hochformat spielen; über „Zum Startbildschirm hinzufügen“ läuft es wie eine App und auch offline.
- Steuerung PC: ◀ ▶ / A D Spur, Leertaste Sprung, F Laser, P / Esc Pause, 1–4 Antwort wählen.
- Steuerung Handy: links / rechts aufs Spielfeld tippen = Spur, Mitte = Sprung, Antwort zweimal antippen.

## Lehrer-Studio

Aufruf mit `?lehrer=1` an der Adresse. Beim ersten Mal wird eine PIN festgelegt (nur im jeweiligen Browser gespeichert).
Im Editor lassen sich eigene Fragen anlegen:

```
# Levelname | Bedenkzeit in Sekunden   (1. Level = Weltall, alle weiteren = Schulgang)
? Fragetext
> „Quellenzitat“ – Quelle, Jahr          (optional)
@ sensibel                               (optional: neutrales Feedback)
+ Richtige Antwort                       (genau eine)
- Falsche Antwort                        (2–3 Stück)
~ Position                               (nur Urteilsfragen: 2–4, ohne „+“)
! Erklärung
```

Eigene Fragen werden nur lokal im Browser gespeichert.

## Datenschutz

Keine externen Ressourcen, keine Cookies, kein Tracking. Im Browser (localStorage) liegen nur Rekord,
Abzeichen, Ton-Einstellung, Lehrer-PIN (als Hash) und ggf. eigene Fragen.

## Lizenz

- Code: MIT (siehe `LICENSE`)
- Inhalte (Fragen, Erklärungen, Tafelbilder): CC BY 4.0, Christopher Deutsch
- Ohne Gewähr. Hinweise auf Fehler gern über das Impressum.
