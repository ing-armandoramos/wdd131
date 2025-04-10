
/*Topic Filtering*/
function filterTopics(criteria) {
	// Heading update
	const heading = document.querySelector('main h2')

	let filteredTopics = topics

	switch (criteria) {
		case 'old':
			// Built before 1900
			filteredTopics = topics.filter((topic) => {
				const year = new Date(topic.Published.replace(/,/g, '')).getFullYear()
				return year < 1900
			})
			heading.textContent = 'Old Topics'
			break

		case 'new':
			// Built after 2000
			filteredTopics = topics.filter((topic) => {
				const year = new Date(topic.Published.replace(/,/g, '')).getFullYear()
				return year > 2000
			})
			heading.textContent = 'New Topics'
			break

		case 'large':
			// larger than 90,000 sq ft
			filteredTopics = topics.filter((topic) => topic.timetoLearn > 30)
			heading.textContent = 'Large Topics'
			break

		case 'small':
			// smaller than 10,000 sq ft
			filteredTopics = topics.filter((topic) => topic.timetoLearn < 5)
			heading.textContent = 'Small Topics'
			break

		default:
			// Show all topics when selecting 'home'
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
                <p class="topic-card__time">timetoLearn: ${topic.timetoLearn.toLocaleString()} minutes</p>
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

	// Listeners in navigation
	const navLinks = document.querySelectorAll('.nav__link')
	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const criteria = link.textContent.toLowerCase()
			filterTopics(criteria)

			// Mobile menu removal
			nav.classList.remove('nav--open')
			menuButton.classList.remove('menu--open')
		})
	})

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
	  timetoLearn: 25,
	  imageUrl: "https://via.placeholder.com/150?text=Pomodoro"
	},
	{
	  topicName: "Active Recall",
	  topicAuthor: "Dr. Barbara Oakley",
	  Published: "2017-05-16",
	  timetoLearn: 15,
	  imageUrl: "https://via.placeholder.com/150?text=Active+Recall"
	},
	{
	  topicName: "Spaced Repetition",
	  topicAuthor: "Sebastian Leitner",
	  Published: "1972-03-10",
	  timetoLearn: 20,
	  imageUrl: "https://via.placeholder.com/150?text=Spaced+Repetition"
	},
	{
	  topicName: "Feynman Technique",
	  topicAuthor: "Richard Feynman",
	  Published: "1960-01-01",
	  timetoLearn: 30,
	  imageUrl: "https://via.placeholder.com/150?text=Feynman+Technique"
	},
	{
	  topicName: "SMART Goals",
	  topicAuthor: "George T. Doran",
	  Published: "1981-11-01",
	  timetoLearn: 20,
	  imageUrl: "https://via.placeholder.com/150?text=SMART+Goals"
	},
	{
	  topicName: "Time Blocking",
	  topicAuthor: "Cal Newport",
	  Published: "2016-01-05",
	  timetoLearn: 25,
	  imageUrl: "https://via.placeholder.com/150?text=Time+Blocking"
	},
	{
	  topicName: "Eisenhower Matrix",
	  topicAuthor: "Dwight D. Eisenhower",
	  Published: "1954-06-01",
	  timetoLearn: 15,
	  imageUrl: "https://via.placeholder.com/150?text=Eisenhower+Matrix"
	},
	{
	  topicName: "Mind Mapping",
	  topicAuthor: "Tony Buzan",
	  Published: "1974-03-01",
	  timetoLearn: 20,
	  imageUrl: "https://via.placeholder.com/150?text=Mind+Mapping"
	},
	{
	  topicName: "Cornell Note Taking",
	  topicAuthor: "Walter Pauk",
	  Published: "1949-01-01",
	  timetoLearn: 30,
	  imageUrl: "https://via.placeholder.com/150?text=Cornell+Notes"
	},
	{
	  topicName: "SQ3R Reading Method",
	  topicAuthor: "Francis P. Robinson",
	  Published: "1946-01-01",
	  timetoLearn: 35,
	  imageUrl: "https://via.placeholder.com/150?text=SQ3R+Method"
	},
	{
	  topicName: "The Pareto Principle (80/20 Rule)",
	  topicAuthor: "Vilfredo Pareto",
	  Published: "1896-01-01",
	  timetoLearn: 15,
	  imageUrl: "https://via.placeholder.com/150?text=Pareto+Principle"
	},
	{
	  topicName: "Flow State",
	  topicAuthor: "Mihaly Csikszentmihalyi",
	  Published: "1990-01-01",
	  timetoLearn: 40,
	  imageUrl: "https://via.placeholder.com/150?text=Flow+State"
	},
	{
	  topicName: "Dual Coding",
	  topicAuthor: "Allan Paivio",
	  Published: "1971-01-01",
	  timetoLearn: 20,
	  imageUrl: "https://via.placeholder.com/150?text=Dual+Coding"
	},
	{
	  topicName: "Interleaving Practice",
	  topicAuthor: "Doug Rohrer",
	  Published: "2014-08-01",
	  timetoLearn: 25,
	  imageUrl: "https://via.placeholder.com/150?text=Interleaving"
	},
	{
	  topicName: "Metacognition",
	  topicAuthor: "John Flavell",
	  Published: "1976-01-01",
	  timetoLearn: 30,
	  imageUrl: "https://via.placeholder.com/150?text=Metacognition"
	},
	{
	  topicName: "Growth Mindset",
	  topicAuthor: "Carol Dweck",
	  Published: "2006-02-28",
	  timetoLearn: 30,
	  imageUrl: "https://via.placeholder.com/150?text=Growth+Mindset"
	},
	{
	  topicName: "Deep Work",
	  topicAuthor: "Cal Newport",
	  Published: "2016-01-05",
	  timetoLearn: 40,
	  imageUrl: "https://via.placeholder.com/150?text=Deep+Work"
	},
	{
	  topicName: "Self-Regulated Learning",
	  topicAuthor: "Barry Zimmerman",
	  Published: "1989-06-01",
	  timetoLearn: 30,
	  imageUrl: "https://via.placeholder.com/150?text=Self-Regulation"
	},
	{
	  topicName: "Goal Setting Theory",
	  topicAuthor: "Edwin Locke",
	  Published: "1968-05-01",
	  timetoLearn: 25,
	  imageUrl: "https://via.placeholder.com/150?text=Goal+Setting"
	},
	{
	  topicName: "Deliberate Practice",
	  topicAuthor: "Anders Ericsson",
	  Published: "1993-07-01",
	  timetoLearn: 45,
	  imageUrl: "https://via.placeholder.com/150?text=Deliberate+Practice"
	},
	{
	  topicName: "Habit Stacking",
	  topicAuthor: "James Clear",
	  Published: "2018-10-16",
	  timetoLearn: 20,
	  imageUrl: "https://via.placeholder.com/150?text=Habit+Stacking"
	}
  ];
  