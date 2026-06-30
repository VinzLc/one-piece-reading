// ============================================================================
// Données de référence One Piece — sagas, arcs, plages de chapitres et tomes.
// Source : One Piece Wiki (chapitres & volumes). Ces données sont "figées" :
// pour mettre à jour l'avancée d'Anaïs, n'éditez QUE progress.json.
// startChapter / endChapter : plage de chapitres de l'arc (inclus).
// startVolume / endVolume   : plage de tomes correspondants (inclus).
// ============================================================================

const ONE_PIECE_DATA = {
  // Repères globaux de l'œuvre (mettre à jour si la série avance).
  totalChapters: 1175,
  totalVolumes: 114,

  sagas: [
    {
      name: "East Blue",
      subtitle: "Le commencement de l'aventure",
      emoji: "🌊",
      arcs: [
        { name: "Romance Dawn", startChapter: 1, endChapter: 7, startVolume: 1, endVolume: 1 },
        { name: "Orange Town", startChapter: 8, endChapter: 21, startVolume: 1, endVolume: 3 },
        { name: "Village de Syrup", startChapter: 22, endChapter: 41, startVolume: 3, endVolume: 5 },
        { name: "Baratie", startChapter: 42, endChapter: 68, startVolume: 5, endVolume: 8 },
        { name: "Arlong Park", startChapter: 69, endChapter: 95, startVolume: 8, endVolume: 11 },
        { name: "Loguetown", startChapter: 96, endChapter: 100, startVolume: 11, endVolume: 12 }
      ]
    },
    {
      name: "Alabasta",
      subtitle: "Le royaume du désert",
      emoji: "🏜️",
      arcs: [
        { name: "Reverse Mountain", startChapter: 101, endChapter: 105, startVolume: 12, endVolume: 12 },
        { name: "Whisky Peak", startChapter: 106, endChapter: 114, startVolume: 12, endVolume: 13 },
        { name: "Little Garden", startChapter: 115, endChapter: 129, startVolume: 13, endVolume: 15 },
        { name: "Drum Island", startChapter: 130, endChapter: 154, startVolume: 15, endVolume: 17 },
        { name: "Alabasta", startChapter: 155, endChapter: 217, startVolume: 17, endVolume: 23 }
      ]
    },
    {
      name: "Sky Island",
      subtitle: "L'île dans les nuages",
      emoji: "☁️",
      arcs: [
        { name: "Jaya", startChapter: 218, endChapter: 236, startVolume: 24, endVolume: 25 },
        { name: "Skypiea", startChapter: 237, endChapter: 302, startVolume: 26, endVolume: 32 }
      ]
    },
    {
      name: "Water Seven",
      subtitle: "La cité de l'eau et CP9",
      emoji: "🚂",
      arcs: [
        { name: "Long Ring Long Land", startChapter: 303, endChapter: 321, startVolume: 32, endVolume: 34 },
        { name: "Water Seven", startChapter: 322, endChapter: 374, startVolume: 34, endVolume: 39 },
        { name: "Enies Lobby", startChapter: 375, endChapter: 430, startVolume: 39, endVolume: 44 },
        { name: "Post-Enies Lobby", startChapter: 431, endChapter: 441, startVolume: 44, endVolume: 45 }
      ]
    },
    {
      name: "Thriller Bark",
      subtitle: "L'île fantôme",
      emoji: "👻",
      arcs: [
        { name: "Thriller Bark", startChapter: 442, endChapter: 489, startVolume: 46, endVolume: 50 }
      ]
    },
    {
      name: "Guerre au Sommet",
      subtitle: "La grande guerre de Marineford",
      emoji: "⚔️",
      arcs: [
        { name: "Archipel Sabaody", startChapter: 490, endChapter: 513, startVolume: 51, endVolume: 53 },
        { name: "Amazon Lily", startChapter: 514, endChapter: 524, startVolume: 53, endVolume: 54 },
        { name: "Impel Down", startChapter: 525, endChapter: 549, startVolume: 54, endVolume: 56 },
        { name: "Marineford", startChapter: 550, endChapter: 580, startVolume: 56, endVolume: 59 },
        { name: "Post-Guerre", startChapter: 581, endChapter: 597, startVolume: 59, endVolume: 61 }
      ]
    },
    {
      name: "Île des Hommes-Poissons",
      subtitle: "Retour après 2 ans",
      emoji: "🐟",
      arcs: [
        { name: "Retour à Sabaody", startChapter: 598, endChapter: 602, startVolume: 61, endVolume: 61 },
        { name: "Île des Hommes-Poissons", startChapter: 603, endChapter: 653, startVolume: 61, endVolume: 66 }
      ]
    },
    {
      name: "Dressrosa",
      subtitle: "Le royaume des jouets",
      emoji: "🌹",
      arcs: [
        { name: "Punk Hazard", startChapter: 654, endChapter: 699, startVolume: 66, endVolume: 70 },
        { name: "Dressrosa", startChapter: 700, endChapter: 801, startVolume: 70, endVolume: 80 }
      ]
    },
    {
      name: "Yonko",
      subtitle: "Vers l'empereur Big Mom et Kaido",
      emoji: "🐘",
      arcs: [
        { name: "Zou", startChapter: 802, endChapter: 824, startVolume: 80, endVolume: 82 },
        { name: "Whole Cake Island", startChapter: 825, endChapter: 902, startVolume: 82, endVolume: 90 },
        { name: "Levely (Reverie)", startChapter: 903, endChapter: 908, startVolume: 90, endVolume: 90 },
        { name: "Pays de Wano", startChapter: 909, endChapter: 1057, startVolume: 91, endVolume: 105 }
      ]
    },
    {
      name: "Saga Finale",
      subtitle: "Le dernier voyage",
      emoji: "🏴‍☠️",
      arcs: [
        { name: "Egghead", startChapter: 1058, endChapter: 1125, startVolume: 105, endVolume: 111 },
        { name: "Elbaf", startChapter: 1126, endChapter: 1175, startVolume: 111, endVolume: 114 }
      ]
    }
  ]
};
