/* =====================================================
   C'EST LE SEUL FICHIER À MODIFIER POUR METTRE À JOUR
   VOTRE SITE (CV, projets, certifications, actualités).
   - Gardez les guillemets "..." et les virgules.
   - Les images se déposent dans le dossier "images/" puis
     s'indiquent ici, ex. "images/certifs/pmp.jpg".
   - Un champ laissé vide ("" ou []) est simplement masqué.
   ===================================================== */

const DONNEES = {
  nom: "Malek JEMAA",
  titre: "Chef de projet PMP® / PMO — Gouvernance de portefeuille & transformation digitale",
  accroche:
    "Plus de 9 ans d'expérience à piloter des programmes de transformation digitale (IT, ERP, CRM, applications métier). Je mets en place la gouvernance, structure les portefeuilles de projets et aligne l'exécution technologique sur les objectifs business.",
  email: "malek.jmaa2024@gmail.com",
  telephone: "+216 52 01 77 31",
  localisation: "Soukra, Ariana, Tunisie",

  liens: [
    { nom: "LinkedIn", url: "https://www.linkedin.com/in/malek-jmaa" },
    { nom: "Credly", url: "https://www.credly.com/users/malek-jemaa" }
  ],

  // Fichier PDF du CV (dans le même dossier que index.html). "" pour masquer le bouton.
  cvPdf: "cv.pdf",

  competences: [
    {
      categorie: "Gouvernance & pilotage",
      items: [
        "Mise en place de PMO", "Gestion de portefeuille & programmes", "Réalisation des bénéfices",
        "Comités de pilotage & KPI", "Gouvernance financière", "Risques, problèmes & dépendances"
      ]
    },
    {
      categorie: "Delivery & transformation",
      items: [
        "Agile / Waterfall / Hybride", "Gestion du changement & adoption", "Gestion des ressources & capacités",
        "Gestion des fournisseurs & contrats", "Amélioration continue & automatisation"
      ]
    },
    {
      categorie: "Outils",
      items: [
        "Azure DevOps", "Jira", "MS Project", "Power BI", "Excel avancé", "Teams / SharePoint",
        "Lucidchart / BPMN", "Dynamics 365", "Navision / Business Central"
      ]
    },
    { categorie: "Langues", items: ["Arabe (langue maternelle)", "Anglais (C1)", "Français (C1)"] }
  ],

  experiences: [
    {
      poste: "PMO — Transformation digitale & gouvernance de portefeuille",
      entreprise: "Central University — Honoris United Universities Group",
      periode: "Fév. 2022 – Présent",
      details: [
        "Pilotage d'un portefeuille de plus de 50 projets IT et de transformation, améliorant la performance de livraison et l'alignement stratégique.",
        "Déploiement d'Azure DevOps : -30 % de temps consacré au reporting et un suivi plus efficace.",
        "Tableaux de bord Power BI en temps réel pour la direction : +15 % d'alignement des initiatives stratégiques.",
        "Définition et mise en œuvre des standards de gouvernance PMO pour plus de 10 parties prenantes exécutives."
      ]
    },
    {
      poste: "Consultant Microsoft Dynamics Business Central — Chef de projet",
      entreprise: "TIMMS (Timsoft Group)",
      periode: "Déc. 2021 – Jan. 2022",
      details: [
        "Gestion de 5 à 10 projets ERP en parallèle avec Jira : +20 % de productivité.",
        "Formation de plus de 50 utilisateurs, accélérant l'adoption et réduisant les demandes de support."
      ]
    },
    {
      poste: "Coordinateur de projets (Microsoft Dynamics Navision / Business Central)",
      entreprise: "Deltasoft International",
      periode: "Juil. 2019 – Nov. 2021",
      details: [
        "Livraison de projets ERP de bout en bout, dans le respect du périmètre, de la qualité et des délais.",
        "Animation d'ateliers de recueil des besoins : -25 % d'écarts sur les exigences."
      ]
    },
    {
      poste: "Consultant technico-fonctionnel ERP — Équipe conception & implémentation",
      entreprise: "SIMAC Tunisie",
      periode: "Juil. 2018 – Mai 2019",
      details: [
        "Coordination avec les utilisateurs métier sur l'implémentation ERP (MyPGI) pour SRTB, SRTGN, BNA et AFH : documentation fonctionnelle, formation, migration de données et tests QA."
      ]
    },
    {
      poste: "Consultant PLM/PDM — Équipe développement",
      entreprise: "Tunis PLM Services",
      periode: "Août 2017 – Juin 2018",
      details: [
        "Projets PLM/PDM internationaux pour BMW, Kuka et Aras Corporation : ateliers clients, documentation des exigences, développement, personnalisation, tests et formation lors de la livraison."
      ]
    },
    {
      poste: "Enseignant",
      entreprise: "Institut Supérieur des Études Technologiques de Kélibia (ISET Kélibia)",
      periode: "Sept. 2016 – Juin 2017",
      details: [
        "Conception d'un cadre d'évaluation de l'efficacité des cours : +20 % de qualité des contenus grâce aux retours des étudiants."
      ]
    }
  ],

  formations: [
    {
      diplome: "Diplôme d'ingénieur — Génie logiciel & systèmes d'information",
      ecole: "Institut Supérieur d'Informatique de Tunis",
      periode: "2013 – 2016"
    }
  ],

  // Certifications. "image" = certificat (facultatif), "lien" = lien de vérification (facultatif).
  // Pour ajouter un certificat : déposez l'image dans images/certifs/ puis copiez une ligne ci-dessous.
  certifications: [
    { titre: "Project Management Professional (PMP)®", organisme: "PMI", date: "Oct. 2024 (valide jusqu'en oct. 2027)", image: "images/certifs/pmp.jpg", lien: "" },
    { titre: "Scrum Product Owner Certified (SPOC®)", organisme: "ScrumStudy", date: "Janv. 2026", image: "images/certifs/spoc.jpg", lien: "" },
    { titre: "Business Analysis Fundamentals with AI Certified (BAFC)", organisme: "BALearning", date: "Déc. 2025", image: "images/certifs/bafc.jpg", lien: "" },
    { titre: "Kanban Essentials with AI Certified (KEC)", organisme: "Kanbanstudy", date: "Déc. 2025", image: "images/certifs/kanban.jpg", lien: "" },
    { titre: "Negotiation Associate (NCN-A™)", organisme: "NGstudy", date: "Déc. 2025", image: "images/certifs/negotiation.jpg", lien: "" },
    { titre: "Scrum for Operations & DevOps Fundamentals Certified (SODFC)", organisme: "ScrumStudy", date: "Déc. 2025", image: "images/certifs/sodfc.jpg", lien: "" },
    { titre: "Scrum Fundamentals Certified (SFC)™", organisme: "ScrumStudy", date: "Oct. 2024", image: "images/certifs/sfc.jpg", lien: "" },
    { titre: "Generative AI Overview for Project Managers", organisme: "PMI", date: "Déc. 2024", image: "images/certifs/genai-pmi.jpg", lien: "" },
    { titre: "The Basics of Scrum", organisme: "PMI", date: "Oct. 2024", image: "images/certifs/basics-scrum-pmi.jpg", lien: "" },
    { titre: "How to create a Jira SCRUM project", organisme: "Coursera Project Network", date: "Nov. 2024", image: "images/certifs/jira-coursera.jpg", lien: "https://coursera.org/verify/YW36BBMF4LTV" },
    { titre: "Agile & Predictive Project Management", organisme: "PMI", date: "Oct. 2024", image: "", lien: "" },
    { titre: "PMI-PMO Certified Professional (PMI-PMOCP)™", organisme: "PMI", date: "En préparation", image: "", lien: "" },
    { titre: "PMI-PMOCP Exam Prep Course (10 h)", organisme: "B Consulting", date: "Déc. 2025", image: "images/certifs/pmocp-prep.jpg", lien: "" },
    { titre: "PMP Exam Prep — PMBOK v8 & Primavera P6 (15 h)", organisme: "B Consulting", date: "Mars 2026", image: "images/certifs/pmp-prep-p6.jpg", lien: "" },
    { titre: "24-Hour PgMP Exam Prep Course", organisme: "B Consulting", date: "Août 2026", image: "images/certifs/pgmp-prep.jpg", lien: "" },
    { titre: "Relief and Data Warehouse Management", organisme: "Croissant-Rouge tunisien", date: "Nov. 2018", image: "", lien: "" }
  ],

  // Projets : tirés de votre CV. Remplacez/complétez avec vos projets détaillés.
  projets: [
    {
      titre: "Portefeuille de 50+ projets IT & transformation",
      description: "Pilotage et priorisation d'un portefeuille de projets au sein d'un groupe universitaire, avec un alignement renforcé sur la stratégie de l'organisation.",
      technologies: ["Gouvernance PMO", "Portefeuille", "Hybride"],
      lien: "",
      image: ""
    },
    {
      titre: "Déploiement d'Azure DevOps",
      description: "Mise en place de l'outil de suivi des projets : réduction de 30 % de l'effort de reporting et meilleure efficacité du suivi.",
      technologies: ["Azure DevOps", "Reporting", "Process"],
      lien: "",
      image: ""
    },
    {
      titre: "Tableaux de bord exécutifs Power BI",
      description: "Tableaux de bord en temps réel pour la direction, ayant permis +15 % d'alignement des initiatives stratégiques.",
      technologies: ["Power BI", "KPI", "Aide à la décision"],
      lien: "",
      image: ""
    },
    {
      titre: "Standards de gouvernance PMO",
      description: "Définition des standards de gouvernance : meilleur contrôle des projets et reporting homogène pour plus de 10 parties prenantes exécutives.",
      technologies: ["PMO", "Gouvernance", "Reporting"],
      lien: "",
      image: ""
    },
    {
      titre: "Projets ERP Microsoft Dynamics (Navision / Business Central)",
      description: "Livraison de projets ERP de bout en bout, formation de plus de 50 utilisateurs et réduction de 25 % des écarts sur les exigences grâce aux ateliers.",
      technologies: ["Dynamics 365", "Business Central", "Jira"],
      lien: "",
      image: ""
    }
  ],

  // Actualités & événements : ajoutez-en autant que vous voulez (le plus récent en premier).
  // "images" peut contenir plusieurs photos : ["images/evenements/bigtec-1.jpg", "images/evenements/bigtec-2.jpg"]
  actualites: [
    {
      titre: "BIGTECH Africa 2026 — 3e édition",
      date: "13 – 14 octobre 2026",
      lieu: "Cité de la Culture, Tunis",
      description: "Participation à la 3e édition de BIGTECH Africa, organisée par TPM Events, en tant que PMO de l'Université Centrale. Deux jours d'échanges avec l'écosystème tech et les partenaires de l'événement (institutions, banques, entreprises et startups).",
      images: [
        "images/evenements/bigtec-1.jpg",
        "images/evenements/bigtec-badge.jpg",
        "images/evenements/bigtec-2.jpg"
      ],
      lien: ""
    }
  ]
};
