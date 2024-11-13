


export const questions = [
	{
		id: "Q1",
		text: "Nombre de personnes dans le véhicule",
		freeText: true,
		next: "Q2",
	},
	{
		id: "Q2",
		text: "Pour quelle raison êtes vous stationnés ici ?",
		options: [
			{ id: 1, text: "Pour le marché", next: "Q3" },
			{ id: 2, text: "Pour des achats, courses (hors marché)", next: "Q3" },
			{ id: 3, text: "Lieu de travail habituel", next: "Q3" },
			{ id: 4, text: "Le domicile", next: "Q3" },
			{ id: 5, text: "Autre", next: "Q2Precision" }
		]
	},
	{
		id: "Q2Precision",
		text: "Précisez la raison",
		freeText: true,
		next: "Q3"
	},
	{
		id: "Q3",
		text: "Combien de temps allez-vous rester garés ici ?",
		options: [
			{ id: 1, text: "15 minutes", next: "Q4" },
			{ id: 2, text: "30 minutes", next: "Q4" },
			{ id: 3, text: "45 minutes", next: "Q4" },
			{ id: 4, text: "60 minutes", next: "Q4" },
			{ id: 5, text: "90 minutes", next: "Q4" },
			{ id: 6, text: "120 minutes", next: "Q4" },
			{ id: 7, text: "Plus de 2 heures", next: "Q4" }
		]
	},
	{
		id: "Q4",
		text: "Quelle est votre commune de résidence ?",
		options: [
			{ id: 1, text: "Croix", next: "Quartier" },
			{ id: 2, text: "Autre commune", next: "Q5" }
		]
	},
	{
		id: "Q5",
		text: "Quelle est votre commune/quartier de résidence",
		usesCommuneSelector: true,  // Add this flag to indicate it uses CommuneSelector
		next: "Q6"  // Explicitly set the next question
	},
	{
		id: "Quartier",
		text: "Dans quel quartier de Croix résidez-vous ?",
		options: [
			{ id: 1, text: "Barbieux", next: "Q6" },
			{ id: 2, text: "Beaumont", next: "Q6" },
			{ id: 3, text: "Canal", next: "Q6" },
			{ id: 4, text: "Centre", next: "Q6" },
			{ id: 5, text: "Croix Blanche", next: "Q6" },
			{ id: 6, text: "Fer à Cheval", next: "Q6" },
			{ id: 7, text: "Mackellerie", next: "Q6" },
			{ id: 8, text: "Planche Epinoy", next: "Q6" },
			{ id: 9, text: "Saint Martin", next: "Q6" },
			{ id: 10, text: "Saint-Pierre", next: "Q6" },
			{ id: 11, text: "Autre", next: "QuartierPrecision" }
		]
	},
	{
		id: "QuartierPrecision",
		text: "Précisez le quartier",
		freeText: true,
		next: "Q6"
	},
	{
		id: "Q6",
		text: "Combien de fois par semaine garez-vous votre véhicule sur ce parking ?",
		freeText: true,
		next: "end"
	},


];

