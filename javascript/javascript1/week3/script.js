//Item array removal
const names = [
	"Peter",
	"Ahmad",
	"Yana",
	"kristina",
	"Rasmus",
	"Samuel",
	"katrine",
	"Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
const indexToremoveName = names.indexOf(nameToRemove);
const removedName = names.splice(indexToremoveName, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// End Of Item array removal code

//When will we be there??
const travelInformation = {
	speed: 50,
	destinationDistance: 432,
};
function travelTimeToDestination(travelInformation) {
	const time = travelInformation.destinationDistance / travelInformation.speed;
	const timeInHours = Math.floor(time);
	const timeInMinutes = Math.floor((time - timeInHours) * 60);
	return `The time will take to arrive at your destination is ${timeInHours} hours and ${timeInMinutes} minutes.
    `;
}
const travelTime = travelTimeToDestination(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//End of When will we be there??

//Series duration of my life
const seriesDurations = [
	{
		title: "Barrister Babu",
		days: 5,
		hours: 2,
		minutes: 0,
	},
	{
		title: "Friends",
		days: 3,
		hours: 14,
		minutes: 0,
	},
	{
		title: "The Wire",
		days: 2,
		hours: 12,
		minutes: 30,
	},
];

function logOutSeriesText(seriesDurations) {
	// write code here
	const minutesInYear = 365 * 24 * 60; //to get minutes in a year
	const minutesInLifeSpan = 80 * minutesInYear; // to get minutes in 80year lifespan
	let minutesSpentoOnSeries = 0;
	for (let i = 0; i < seriesDurations.length; i++) {
		const totalMinutesSpentOnSeries =
			seriesDurations[i].days * 24 * 60 +
			seriesDurations[i].hours * 60 +
			seriesDurations[i].minutes;
		minutesSpentoOnSeries += totalMinutesSpentOnSeries;

		const percentageOfAverageLifeSpan = (
			(totalMinutesSpentOnSeries / minutesInLifeSpan) *
			100
		).toFixed(3);

		console.log(
			`${seriesDurations[i].title} have taken ${percentageOfAverageLifeSpan} % of my life.`
		);
	}
	const totalPercentage = (
		(minutesSpentoOnSeries / minutesInLifeSpan) *
		100
	).toFixed(3);

	console.log(`Total ${totalPercentage} % of my life.`);
}

logOutSeriesText(seriesDurations); // logs out the text found above
//End of Series duration of my life

//NOnoN0nOYes (Note taking app)
const notes = [];

//save note
function saveNote(content, id) {
	// write some code here
	return notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//get note
function getNote(id) {
	// your code here
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].id === id) {
			return notes[i];
		} else if (id === undefined || isNaN(id)) {
			return console.log("Invalid ID or ID not found");
		} else {
			return console.log("Unknown ID");
		}
	}
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Log out notes

function logOutNotesFormatted() {
	// your code here
	notes.forEach((item) =>
		console.log(
			`The note with id: ${item.id}, has the following note text: ${item.content}`
		)
	);
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//End Of NOnoN0nOYes (Note taking app)

//CactusIO-interactive (Smart phone usage app) optional
const activities = [];

function addActivity(activity, duration) {
	let activityElement = {
		date: new Date().toLocaleDateString("en-GB"),
		activity,
		duration,
	};
	activities.push(activityElement);
}
addActivity("Youtube", 30);
addActivity("Facebook", 60);
addActivity("Instagram", 30);
addActivity("News", 60);

//Show my status
function showStatus(activities) {
	if (activities.length === 0) {
		console.log("Add some activities before calling showStatus");
	} else {
		const limitUsage = 180;
		let totalTime = 0;
		activities.forEach((element) => {
			totalTime = totalTime + element.duration;
		});

		if (totalTime >= limitUsage) {
			console.log("You have reached your limit, no more smartphoning for you!");
		} else {
			console.log(
				`You have added ${activities.length} activities.They amount to ${totalTime} min of usage`
			);
		}
	}
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
