    exports.objectifFamilialOptionnel = new Map([
        [1, "Avoir des triplés devenant adolescents"],
        [2, "Finir une collection"],
        [3, "Atteindre une valeur de maison totale de 250k"],
        [4, "Personne n'a de profession durant une génération"],
        [5, "Un héritier tire deux contraintes"],
        [6, "Finir deux aspirations d'adultes avec un seul sim"],
        [7, "Atteindre deux carrières au niveau 10 avec un seul sim"],
        [8, "Finir une aspiration d'adulte avec une durée de vie courte sur cette génération"]
    ])

exports.contrainteFamilialePermanente = new Map ([
    [1, "Les traits et aspirations sont aléatoires"],
    [2, "Il ne peut y avoir aucun meuble dans le jardin"],
    [3, "Trois pièces seulement peuvent être construites"],
    [4, "Les fonds de la famille ne peuvent jamais excéder 5k"],
    [5, "Les meubles ne peuvent pas être revendus (mais ils peuvent être mis dans l'inventaire familial)"],
    [6, "Rien ne peut être acheté grâce aux points d'aspiration"],
    [7, "La maison ne peut s'étendre plus que sur un carré de 10x10 (les étages sont autorisés)"],
    [8, "Le travail et l'école doivent rester sur le mode 'normal'"],
    [9, "Un seul meuble par jour peut être acheté"],
    [10, "Les héritiers doivent avoir une continuité physique : cheveux ou yeux, à choisir dès la première génération"],
    [11, "La caractéristique de terrain 'Hors réseau' doit être activé"],
    [12, "Ajouter deux traits de terrain négatif aléatoire"]
])

exports.structure = new Map ([
    [1, "Célibataire"],
    [2, "Couple"],
    [17, "Un parent différent par enfant, en couple"],
    [18, "Un parent différent par enfant, célibataire"],
    [19, "Célibataire avec aide(services)"],
    [20, "Couple avec aide(services)"]
])

exports.nombreEnfants = new Map ([
    [1, "Un"],
    [2, "Deux"],
    [3, "Trois"],
    [8, "Quatre"],
    [9, "Cinq"],
    [10, "Six"]
])

exports.revenus = new Map ([
    [1, "Carrière conventionnelle"],
    [2, "Carrière non-conventionnelle"],
    [10, "Carrière à mi-temps (choix libre)"]
])

exports.carrieresConventionnelles = new Map ([
    [1, "Artiste"],
    [2, "Ecrivain"],
    [3, "Peintre"],
    [4, "Agent Secret"],
    [5, "Criminel"],
    [6, "Astronaute"],
    [7, "Culinaire"],
    [8, "Gourou des technologies"],
    [9, "Athlètes"],
    [10, "Affaires"],
    [11, "Critique"],
    [12, "Politique"],
    [13, "Médias"],
    [14, "Détective"],
    [15, "Médecin"],
    [16, "Scientifique"],
    [17, "Influenceur"],
    [18, "Réseaux Sociaux"],
    [19, "Jardinier"]
])

exports.carrieresNonConventionnelles = new Map ([
    [1, "Peintre"],
    [2, "Auteur"],
    [3, "Musicien"],
    [4, "Jardinier"],
    [5, "Pêcheur"],
    [6, "Chasseur de trésors"],
    [7, "Bricoleur"],
    [8, "Comédien"],
    [9, "Programmeur"],
    [10, "Explorateur de l'espace"],
    [11, "Joueur Professionnel"],
    [12, "Cybercriminel"],
    [13, "Hôte professionnel"],
    [14, "Tenir une boutique"],
    [15, "Photographe"],
    [16, "Artiste électrisé"],
    [17, "Auteur numérique"],
    [18, "Programmeur indépendant"],
    [19, "Chanteur"],
    [20, "Gagnant de concours"],
    [21, "Apiculteur"]
])

exports.objectifGenerationnel = new Map ([
    [1, "L'héritier doit atteindre le niveau 10 de sa carrière"],
    [2, "L'héritier doit réaliser son aspiration"],
    [3, "Tous les enfants doivent atteindre le niveau 3 dans les compétences de bambins, réaliser les aspirations d'enfants et être niveau 3 en carrière d'adolescent"],
    [4, "Toutes les tâches quotidiennes des carrières/écoles doivent être réalisées"],
    [5, "La maison doit être agrandie et décorée d'une surface égale à la moitié de la superficie actuelle. Un trait de terrain peut être modifié"],
    [6, "Obtenir des médailles d'or pour chaque événement possible"],
    [7, "Ne pas quitter le terrain de sa maison (sauf pour l'aspiration et la profession)"],
    [8, "L'héritier doit avoir 4 compétences au niveau 10"],
    [9, "Les enfants doivent avoir au moins 3 qualités à l'âge adulte"],
    [10, "Un enfant doit avoir 5 qualités à l'age adulte"]
])

exports.contrainteGenerationnelle = new Map([
    [1, "Seniors et adolescents ne peuvent pas travailler"],
    [2, "Les fonds sont réduits à 0 après chaque facture"],
    [3, "Tous les repas sont faits maison"],
    [4, "Les enfants doivent avoir un trait en commun avec l'héritier, le premier à apparaître"],
    [5, "Aucun jour de congé ne peut être pris"],
    [6, "Les meubles placés ne peuvent plus êtres vendus, ni déplacés"],
    [7, "L'héritier doit avoir autant d'amants, à un moment donné, qu'il doit avoir d'enfants"],
    [8, "Les naissances des enfants doivent s'enchaîner"],
    [9, "Les sims ne peuvent pas quitter le terrain, sauf pour la profession ou l'école"],
    [10, "Aucun service ne peut être utilisé, même la garderie"],
    [11, "A chaque niveau 4 de carrière atteint, la carrière si conventionnelle doit être tiré à nouveau pour l'héritier et son conjoint(commande !newjobs)"]
])

exports.heritier = new Map ([
    [1, "L'ainé - peu importe le sexe"],
    [2, "Matriarcat - L'ainée des filles"],
    [3, "Patriarcat - L'ainée des garçons"],
    [4, "Relationnel - L'enfant qui a la meilleure relation avec l'héritier"],
    [5, "Benjamin - Le petit dernier, toujours 'préjent' !"]
])

exports.demenagement = new Map ([
    [1, "Maison et fortune sont conservées telles qu'elles"],
    [2, "La valeur totale de la maison et de la fortune cumulées est divisée équitablement par le nombre d'enfants"],
    [3, "L'héritier ne peut garder que 50% de la valeur totale de la maison et de la fortune cumulées"],
    [10, "Ttoute la fortune est perdues et la maison détruite"]
])