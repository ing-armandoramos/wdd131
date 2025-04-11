
/*Topic Filtering*/
function filterTopics(criteria) {
	// Heading update
	const heading = document.querySelector('main h2')

	let filteredTopics = topics

	switch (criteria) {
		
		case 'slow':
			// Takes more than 30 minutes to learn
			filteredTopics = topics.filter((topic) => topic.Learning_Time > 30)
			heading.textContent = 'Large Topics'
			break
		
		case 'medium':
			// Takes between 16 to 29 minutes
			filteredTopics = topics.filter((topic) => topic.Learning_Time >= 16 && topic.Learning_Time <= 29)
			heading.textContent = 'Medium Topics'
			break

		case 'fast':
			// Takes 15 minutes or less to learn
			filteredTopics = topics.filter((topic) => topic.Learning_Time <= 15)
			heading.textContent = 'Small Topics'
			break

		default:
			// Show all topics when selecting 'Topics'
			heading.textContent = 'All Topics'
	}

	displayTopics(filteredTopics)
}


/* @param {Array} topicList - Array of topics*/
function displayTopics(topicList = topics) {
	
	// Add the topic cards
	const main = document.querySelector('main')

	// Remove previous container
	const existingContainer = document.getElementById('topics')
	if (existingContainer) {
		existingContainer.remove()
	}

	// Topic cards container
	const topicsContainer = document.createElement('div')
	topicsContainer.id = 'topics'

	// Loop through topics
	topicList.forEach((topic) => {
		// Figure element
		const figure = document.createElement('figure')
		figure.className = 'topic-card'

		// Format dates
		const dedicationDate = new Date(topic.Published.replace(/,/g, ''))
		const formattedDate = dedicationDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

		// Card content
		figure.innerHTML = `
            <img
                src="${topic.imageUrl}"
                alt="The ${topic.topicName} Topic"
                class="topic-card__image"
                loading="lazy"
            >
            <figcaption class="topic-card__caption">
                <h2 class="topic-card__title">${topic.topicName}</h2>
                <p class="topic-card__topicAuthor">${topic.topicAuthor}</p>
                <p class="topic-card__published">Published: ${formattedDate}</p>
                <p class="topic-card__time">Learning_Time: ${topic.Learning_Time.toLocaleString()} minutes</p>
            </figcaption>
        `

		// Container to the figure
		topicsContainer.appendChild(figure)
	})

	// Container in the main element
	main.appendChild(topicsContainer)
}

/*Event Listeners and Initialization*/
document.addEventListener('DOMContentLoaded', function () {
	// Hamburger and navigation
	const menuButton = document.getElementById('menu')
	const nav = document.querySelector('.nav')

	// Event hamburger button is clicked
	menuButton.addEventListener('click', function () {
		nav.classList.toggle('nav--open')
		menuButton.classList.toggle('menu--open')

		// Toggle aria-expanded attribute for accessibility
		const isExpanded = nav.classList.contains('nav--open')
		menuButton.setAttribute('aria-expanded', isExpanded)
	})

	const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		const criteria = link.textContent.toLowerCase();

		// Only filter topics if the link is one of the filters
		if (['all', 'fast', 'medium', 'slow'].includes(criteria)) {
			e.preventDefault();
			filterTopics(criteria);

			// Collapse mobile nav
			nav.classList.remove('nav--open');
			menuButton.classList.remove('menu--open');
		}
	});
});

	// Show all topics in regular
	displayTopics()
})

/*Footer*/
// Copyright
document.getElementById('currentyear').textContent = new Date().getFullYear()
// Last modified
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`

/*Topic Data*/
const topics = [
	{
	  topicName: "Pomodoro Technique",
	  topicAuthor: "Francesco Cirillo",
	  Published: "1987-01-01",
	  Learning_Time: 25,
	  imageUrl: "images/pomodoro.webp"
	},
	{
	  topicName: "Active Recall",
	  topicAuthor: "Dr. Barbara Oakley",
	  Published: "2017-05-16",
	  Learning_Time: 15,
	  imageUrl: "images/active_recall.webp"
	},
	{
	  topicName: "Spaced Repetition",
	  topicAuthor: "Sebastian Leitner",
	  Published: "1972-03-10",
	  Learning_Time: 20,
	  imageUrl: "images/spaced_repetition.webp"
	},
	{
	  topicName: "Feynman Technique",
	  topicAuthor: "Richard Feynman",
	  Published: "1960-01-01",
	  Learning_Time: 30,
	  imageUrl: "images/feynman_technique.webp"
	},
	{
	  topicName: "SMART Goals",
	  topicAuthor: "George T. Doran",
	  Published: "1981-11-01",
	  Learning_Time: 20,
	  imageUrl: "images/smart.webp"
	},
	{
	  topicName: "Time Blocking",
	  topicAuthor: "Cal Newport",
	  Published: "2016-01-05",
	  Learning_Time: 25,
	  imageUrl: "images/timeblocking.webp"
	},
	{
	  topicName: "Eisenhower Matrix",
	  topicAuthor: "Dwight D. Eisenhower",
	  Published: "1954-06-01",
	  Learning_Time: 15,
	  imageUrl: "images/eisenhower_matrix.webp"
	},
	{
	  topicName: "Mind Mapping",
	  topicAuthor: "Tony Buzan",
	  Published: "1974-03-01",
	  Learning_Time: 20,
	  imageUrl: "images/mind_mapping.webp"
	},
	{
	  topicName: "Cornell Note Taking",
	  topicAuthor: "Walter Pauk",
	  Published: "1949-01-01",
	  Learning_Time: 30,
	  imageUrl: "images/note_taking.webp"
	},
	{
	  topicName: "SQ3R Reading Method",
	  topicAuthor: "Francis P. Robinson",
	  Published: "1946-01-01",
	  Learning_Time: 35,
	  imageUrl: "images/sq3r.webp"
	},
	{
	  topicName: "The Pareto Principle (80/20 Rule)",
	  topicAuthor: "Vilfredo Pareto",
	  Published: "1896-01-01",
	  Learning_Time: 15,
	  imageUrl: "images/pareto_principle.webp"
	},
	{
	  topicName: "Flow State",
	  topicAuthor: "Mihaly Csikszentmihalyi",
	  Published: "1990-01-01",
	  Learning_Time: 40,
	  imageUrl: "images/flow_state.webp"
	},
	{
	  topicName: "Dual Coding",
	  topicAuthor: "Allan Paivio",
	  Published: "1971-01-01",
	  Learning_Time: 20,
	  imageUrl: "images/dual_coding.webp"
	},
	{
	  topicName: "Interleaving Practice",
	  topicAuthor: "Doug Rohrer",
	  Published: "2014-08-01",
	  Learning_Time: 25,
	  imageUrl: "images/interleaving_practice.webp"
	},
	{
	  topicName: "Metacognition",
	  topicAuthor: "John Flavell",
	  Published: "1976-01-01",
	  Learning_Time: 30,
	  imageUrl: "images/metacognition_cycle.webp"
	},
	{
	  topicName: "Growth Mindset",
	  topicAuthor: "Carol Dweck",
	  Published: "2006-02-28",
	  Learning_Time: 30,
	  imageUrl: "images/growth_mindset.webp"
	},
	{
	  topicName: "Deep Work",
	  topicAuthor: "Cal Newport",
	  Published: "2016-01-05",
	  Learning_Time: 40,
	  imageUrl: "images/deep_work.webp"
	},
	{
	  topicName: "Self-Regulated Learning",
	  topicAuthor: "Barry Zimmerman",
	  Published: "1989-06-01",
	  Learning_Time: 30,
	  imageUrl: "images/self_regulated.webp"
	},
	{
	  topicName: "Goal Setting Theory",
	  topicAuthor: "Edwin Locke",
	  Published: "1968-05-01",
	  Learning_Time: 25,
	  imageUrl: "images/goal_setting_theory.webp"
	},
	{
	  topicName: "Deliberate Practice",
	  topicAuthor: "Anders Ericsson",
	  Published: "1993-07-01",
	  Learning_Time: 45,
	  imageUrl: "images/deliberate_practice.webp"
	},
	{
	  topicName: "Habit Stacking",
	  topicAuthor: "James Clear",
	  Published: "2018-10-16",
	  Learning_Time: 20,
	  imageUrl: "images/habit_stacking.webp"
	}
  ];
  