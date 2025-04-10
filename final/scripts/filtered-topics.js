
/*Topic Filtering*/
function filterTopics(criteria) {
	// Heading update
	const heading = document.querySelector('main h2')

	let filteredTopics = topics

	switch (criteria) {
		case 'old':
			// Built before 1900
			filteredTopics = topics.filter((topic) => {
				const year = new Date(topic.dedicated.replace(/,/g, '')).getFullYear()
				return year < 1900
			})
			heading.textContent = 'Old Topics'
			break

		case 'new':
			// Built after 2000
			filteredTopics = topics.filter((topic) => {
				const year = new Date(topic.dedicated.replace(/,/g, '')).getFullYear()
				return year > 2000
			})
			heading.textContent = 'New Topics'
			break

		case 'large':
			// larger than 90,000 sq ft
			filteredTopics = topics.filter((topic) => topic.area > 90000)
			heading.textContent = 'Large Topics'
			break

		case 'small':
			// smaller than 10,000 sq ft
			filteredTopics = topics.filter((topic) => topic.area < 10000)
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
		const dedicationDate = new Date(topic.dedicated.replace(/,/g, ''))
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
                <p class="topic-card__location">${topic.location}</p>
                <p class="topic-card__dedication">Dedicated: ${formattedDate}</p>
                <p class="topic-card__area">Area: ${topic.area.toLocaleString()} sq ft</p>
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
		topicName: 'Aba Nigeria',
		location: 'Aba, Nigeria',
		dedicated: '2005, August, 7',
		area: 11500,
		imageUrl: 'images/aba-nigeria-temple-5087.webp'
	},
	{
		topicName: 'Manti Utah',
		location: 'Manti, Utah, United States',
		dedicated: '1888, May, 21',
		area: 74792,
		imageUrl: 'images/manti-utah-temple-40551-main.webp'
	},
	{
		topicName: 'Payson Utah',
		location: 'Payson, Utah, United States',
		dedicated: '2015, June, 7',
		area: 96630,
		imageUrl: 'images/payson-utah-temple-38451-main.webp'
	},
	{
		topicName: 'Yigo Guam',
		location: 'Yigo, Guam',
		dedicated: '2020, May, 2',
		area: 6861,
		imageUrl: 'images/yigo-guam-temple-26495-main.webp'
	},
	{
		topicName: 'Washington D.C.',
		location: 'Kensington, Maryland, United States',
		dedicated: '1974, November, 19',
		area: 156558,
		imageUrl: 'images/washington-d.c.-temple-14992-main.webp'
	},
	{
		topicName: 'Lima Perú',
		location: 'Lima, Perú',
		dedicated: '1986, January, 10',
		area: 9600,
		imageUrl: 'images/lima_peru_temple_lds.webp'
	},
	{
		topicName: 'Mexico City Mexico',
		location: 'Mexico City, Mexico',
		dedicated: '1983, December, 2',
		area: 116642,
		imageUrl: 'images/mexico_city_temple_lds.webp'
	},
	{
		topicName: 'Rome Italy',
		location: 'Rome, Italy',
		dedicated: '2010, October, 23',
		area: 41010,
		imageUrl: 'images/rome-italy-temple-2642-main.webp'
	},
	{
		topicName: 'Atlanta Georgia',
		location: 'Sandy Springs, Georgia, United States',
		dedicated: '1983, June, 1',
		area: 34500,
		imageUrl: 'images/atlanta_temple_lds.webp'
	},
	{
		topicName: 'Bogota Colombia',
		location: 'Bogota, Distrito Capital, Colombia',
		dedicated: '1999, April, 18',
		area: 53500,
		imageUrl: 'images/bogota_colombia_temple_lds.webp'
	},
	{
		topicName: 'Buenos Aires Argentina',
		location: 'Ciudad Evita, Buenos Aires, Argentina',
		dedicated: '1986, January, 19',
		area: 30659,
		imageUrl: 'images/buenos_aires_argentina_temple.webp'
	},
	{
		topicName: 'Laie Hawaii',
		location: 'Laie, Hawaii, United States',
		dedicated: '1919, November, 27-30',
		area: 42100,
		imageUrl: 'images/laie-hawaii-temple-7370-main.webp'
	},
	{
		topicName: 'Guadalajara Mexico',
		location: 'Zapopan, Jalisco, Mexico',
		dedicated: '2001, April, 29',
		area: 10700,
		imageUrl: 'images/guadalajara_temple_lds.webp'
	},
	{
		topicName: 'Hermosillo Sonora Mexico',
		location: 'Hermosillo, Sonora, Mexico',
		dedicated: '2000, February, 27',
		area: 10769,
		imageUrl: 'images/hermosillo_sonora_mexico_temple_lds.webp'
	},
	{
		topicName: 'Los Angeles California',
		location: 'Los Angeles, California, United States',
		dedicated: '1956, March, 14',
		area: 190614,
		imageUrl: 'images/los_angeles_temple_lds.webp'
	},
	{
		topicName: 'Bern Switzerland',
		location: 'Bern, Switzerland',
		dedicated: '1955, September, 11-15',
		area: 35546,
		imageUrl: 'images/bern-switzerland-temple-54641-main.webp'
	},
	{
		topicName: 'Panama City Panama',
		location: 'Ancon, Provincia de Panamá, Panama',
		dedicated: '2008, July, 26',
		area: 18943,
		imageUrl: 'images/panama_city_temple_lds.webp'
	},
	{
		topicName: 'Raleight North Carolina',
		location: 'Apex, North Carolina, United States',
		dedicated: '1999, December, 19',
		area: 12864,
		imageUrl: 'images/raleigh_north_carolina_temple.webp'
	},
	{
		topicName: 'Redlands California',
		location: 'Redlands, California, United States',
		dedicated: '2003, September, 14',
		area: 17300,
		imageUrl: 'images/redlands_temple_lds.webp'
	}
]
