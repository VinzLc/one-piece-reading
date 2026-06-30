# 🏴‍☠️ Le Journal de Bord d'Anaïs — Suivi de lecture One Piece

Un petit dashboard tout simple et joli pour suivre l'avancée d'Anaïs dans la
lecture de **One Piece** : chapitre actuel, tome, arc en cours, progression
dans chaque saga.

➡️ **Site en ligne :** voir l'onglet *Settings → Pages* du dépôt (l'URL apparaît
une fois GitHub Pages activé).

## ✍️ Mettre à jour l'avancée

Un **seul** fichier à modifier : [`progress.json`](progress.json).

```json
{
  "reader": "Anaïs",
  "currentVolume": 60,
  "currentChapter": 590,
  "lastUpdated": "2026-06-30",
  "note": "En pleine guerre au sommet ⚔️"
}
```

| Champ            | À quoi ça sert                                                        |
| ---------------- | --------------------------------------------------------------------- |
| `reader`         | Le prénom affiché dans le titre                                       |
| `currentVolume`  | Le tome en cours de lecture                                           |
| `currentChapter` | Le chapitre en cours — **c'est lui qui pilote tout le reste**         |
| `lastUpdated`    | Date de mise à jour (format `AAAA-MM-JJ`)                             |
| `note`           | Petit message libre affiché sous la jauge (optionnel)                |

Tout le reste (arc en cours, saga, pourcentages, frise) est **calculé
automatiquement** à partir du chapitre.

### Comment éditer ?

- **Le plus simple :** sur GitHub, ouvrir `progress.json`, cliquer sur le
  crayon ✏️, changer les chiffres, puis *Commit changes*. Le site se met à jour
  tout seul en ~1 minute.
- **En local :** modifier le fichier, `git commit`, `git push`.

## 📁 Structure du projet

| Fichier         | Rôle                                                                |
| --------------- | ------------------------------------------------------------------- |
| `index.html`    | La page                                                             |
| `style.css`     | Le thème "carte au trésor / parchemin"                              |
| `app.js`        | Charge `progress.json`, calcule l'avancée, construit l'affichage    |
| `data.js`       | Données de référence (sagas, arcs, plages de chapitres/tomes)       |
| `progress.json` | **Le seul fichier à éditer pour mettre à jour l'avancée**           |

> Les données des arcs (`data.js`) suivent le découpage de la
> [One Piece Wiki](https://onepiece.fandom.com/wiki/Chapters_and_Volumes).
> Si la série avance, mettre à jour `totalChapters` / `totalVolumes` en haut de
> `data.js`, et ajouter les nouveaux arcs.

## 🧪 Tester en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

(Un simple double-clic sur `index.html` marche aussi, mais le serveur local
permet de bien charger `progress.json`.)

---

*Fait avec ❤️ — « Je vais devenir le Roi des Pirates ! »*
