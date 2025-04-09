
/*Temple Filtering*/
function filterTemples(criteria) {
	// Heading update
	const heading = document.querySelector('main h2')

	let filteredTemples = temples

	switch (criteria) {
		case 'old':
			// Built before 1900
			filteredTemples = temples.filter((temple) => {
				const year = new Date(temple.dedicated.replace(/,/g, '')).getFullYear()
				return year < 1900
			})
			heading.textContent = 'Old Temples'
			break

		case 'new':
			// Built after 2000
			filteredTemples = temples.filter((temple) => {
				const year = new Date(temple.dedicated.replace(/,/g, '')).getFullYear()
				return year > 2000
			})
			heading.textContent = 'New Temples'
			break

		case 'large':
			// larger than 90,000 sq ft
			filteredTemples = temples.filter((temple) => temple.area > 90000)
			heading.textContent = 'Large Temples'
			break

		case 'small':
			// smaller than 10,000 sq ft
			filteredTemples = temples.filter((temple) => temple.area < 10000)
			heading.textContent = 'Small Temples'
			break

		default:
			// Show all temples when selecting 'home'
			heading.textContent = 'All Temples'
	}

	displayTemples(filteredTemples)
}

/* @param {Array} templeList - Array of temples*/
function displayTemples(templeList = temples) {
	// Add the temple cards
	const main = document.querySelector('main')

	// Remove previous container
	const existingContainer = document.getElementById('temples')
	if (existingContainer) {
		existingContainer.remove()
	}

	// Temple cards container
	const templesContainer = document.createElement('div')
	templesContainer.id = 'temples'

	// Loop through temples
	templeList.forEach((temple) => {
		// Figure element
		const figure = document.createElement('figure')
		figure.className = 'temple-card'

		// Format dates
		const dedicationDate = new Date(temple.dedicated.replace(/,/g, ''))
		const formattedDate = dedicationDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

		// Card content
		figure.innerHTML = `
            <img
                src="${temple.imageUrl}"
                alt="The ${temple.templeName} Temple"
                class="temple-card__image"
                loading="lazy"
            >
            <figcaption class="temple-card__caption">
                <h2 class="temple-card__title">${temple.templeName}</h2>
                <p class="temple-card__location">${temple.location}</p>
                <p class="temple-card__dedication">Dedicated: ${formattedDate}</p>
                <p class="temple-card__area">Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `

		// Container to the figure
		templesContainer.appendChild(figure)
	})

	// Container in the main element
	main.appendChild(templesContainer)
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
			filterTemples(criteria)

			// Mobile menu removal
			nav.classList.remove('nav--open')
			menuButton.classList.remove('menu--open')
		})
	})

	// Show all temples in regular
	displayTemples()
})

/*Footer*/
// Copyright
document.getElementById('currentyear').textContent = new Date().getFullYear()
// Last modified
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`

/*Temple Data*/
const temples = [
	{
		templeName: 'Aba Nigeria',
		location: 'Aba, Nigeria',
		dedicated: '2005, August, 7',
		area: 11500,
		imageUrl: 'images/aba-nigeria-temple-5087.webp'
	},
	{
		templeName: 'Manti Utah',
		location: 'Manti, Utah, United States',
		dedicated: '1888, May, 21',
		area: 74792,
		imageUrl: 'images/manti-utah-temple-40551-main.webp'
	},
	{
		templeName: 'Payson Utah',
		location: 'Payson, Utah, United States',
		dedicated: '2015, June, 7',
		area: 96630,
		imageUrl: 'images/payson-utah-temple-38451-main.webp'
	},
	{
		templeName: 'Yigo Guam',
		location: 'Yigo, Guam',
		dedicated: '2020, May, 2',
		area: 6861,
		imageUrl: 'images/yigo-guam-temple-26495-main.webp'
	},
	{
		templeName: 'Washington D.C.',
		location: 'Kensington, Maryland, United States',
		dedicated: '1974, November, 19',
		area: 156558,
		imageUrl: 'images/washington-d.c.-temple-14992-main.webp'
	},
	{
		templeName: 'Lima Perú',
		location: 'Lima, Perú',
		dedicated: '1986, January, 10',
		area: 9600,
		imageUrl: 'images/lima_peru_temple_lds.webp'
	},
	{
		templeName: 'Mexico City Mexico',
		location: 'Mexico City, Mexico',
		dedicated: '1983, December, 2',
		area: 116642,
		imageUrl: 'images/mexico_city_temple_lds.webp'
	},
	{
		templeName: 'Rome Italy',
		location: 'Rome, Italy',
		dedicated: '2010, October, 23',
		area: 41010,
		imageUrl: 'images/rome-italy-temple-2642-main.webp'
	},
	{
		templeName: 'Atlanta Georgia',
		location: 'Sandy Springs, Georgia, United States',
		dedicated: '1983, June, 1',
		area: 34500,
		imageUrl: 'images/atlanta_temple_lds.webp'
	},
	{
		templeName: 'Bogota Colombia',
		location: 'Bogota, Distrito Capital, Colombia',
		dedicated: '1999, April, 18',
		area: 53500,
		imageUrl: 'images/bogota_colombia_temple_lds.webp'
	},
	{
		templeName: 'Buenos Aires Argentina',
		location: 'Ciudad Evita, Buenos Aires, Argentina',
		dedicated: '1986, January, 19',
		area: 30659,
		imageUrl: 'images/buenos_aires_argentina_temple.webp'
	},
	{
		templeName: 'Laie Hawaii',
		location: 'Laie, Hawaii, United States',
		dedicated: '1919, November, 27-30',
		area: 42100,
		imageUrl: 'images/laie-hawaii-temple-7370-main.webp'
	},
	{
		templeName: 'Guadalajara Mexico',
		location: 'Zapopan, Jalisco, Mexico',
		dedicated: '2001, April, 29',
		area: 10700,
		imageUrl: 'images/guadalajara_temple_lds.webp'
	},
	{
		templeName: 'Hermosillo Sonora Mexico',
		location: 'Hermosillo, Sonora, Mexico',
		dedicated: '2000, February, 27',
		area: 10769,
		imageUrl: 'images/hermosillo_sonora_mexico_temple_lds.webp'
	},
	{
		templeName: 'Los Angeles California',
		location: 'Los Angeles, California, United States',
		dedicated: '1956, March, 14',
		area: 190614,
		imageUrl: 'images/los_angeles_temple_lds.webp'
	},
	{
		templeName: 'Bern Switzerland',
		location: 'Bern, Switzerland',
		dedicated: '1955, September, 11-15',
		area: 35546,
		imageUrl: 'images/bern-switzerland-temple-54641-main.webp'
	},
	{
		templeName: 'Panama City Panama',
		location: 'Ancon, Provincia de Panamá, Panama',
		dedicated: '2008, July, 26',
		area: 18943,
		imageUrl: 'images/panama_city_temple_lds.webp'
	},
	{
		templeName: 'Raleight North Carolina',
		location: 'Apex, North Carolina, United States',
		dedicated: '1999, December, 19',
		area: 12864,
		imageUrl: 'images/raleigh_north_carolina_temple.webp'
	},
	{
		templeName: 'Redlands California',
		location: 'Redlands, California, United States',
		dedicated: '2003, September, 14',
		area: 17300,
		imageUrl: 'images/redlands_temple_lds.webp'
	}
]
