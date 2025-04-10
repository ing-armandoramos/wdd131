const products = [
	{
		id: 'fc-1888',
		name: 'flux capacitor',
		averagerating: 4.5
	},
	{
		id: 'fc-2050',
		name: 'power laces',
		averagerating: 4.7
	},
	{
		id: 'fs-1987',
		name: 'time circuits',
		averagerating: 3.5
	},
	{
		id: 'ac-2000',
		name: 'low voltage reactor',
		averagerating: 3.9
	},
	{
		id: 'jj-1969',
		name: 'warp equalizer',
		averagerating: 5.0
	}
]

const productSelect = document.getElementById('product')
const currentYearSpan = document.getElementById('current-year')
const lastModifiedSpan = document.getElementById('last-modified')
const ratingDiv = document.querySelector('.rating')
const ratingInputs = document.querySelectorAll('input[name="rating"]')
const reviewCountSpan = document.getElementById('review-count')

function populateProductOptions() {
	if (!productSelect) return
	products.forEach((product) => {
		const option = document.createElement('option')
		option.value = product.name
		option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1)
		productSelect.appendChild(option)
	})
}

function updateReviewCounter() {
	if (window.location.pathname.includes('thankyou.html') && reviewCountSpan) {
		let count = parseInt(localStorage.getItem('reviewCount') || '0')
		count = count+1;
		localStorage.setItem('reviewCount', count.toString())
		reviewCountSpan.textContent = count
	}
	if (window.location.pathname.toLowerCase().includes('thankyou') && reviewCountSpan) {
		let count = parseInt(localStorage.getItem('reviewCount') || '0')
		reviewCountSpan.textContent = count
	}
}

function setCurrentYear() {
	if (currentYearSpan) {
		currentYearSpan.textContent = new Date().getFullYear()
	}
}

function setLastModified() {
	if (lastModifiedSpan) {
		lastModifiedSpan.textContent = document.lastModified
	}
}

function setupRatingValidation() {
	if (!ratingDiv) return
	ratingInputs.forEach((input) => {
		input.addEventListener('change', () => {
			ratingDiv.classList.add('valid')
		})
	})
	const form = document.querySelector('.review-form')
	if (form) {
		form.addEventListener('submit', (event) => {
			const isRatingSelected = Array.from(ratingInputs).some((input) => input.checked)

			if (!isRatingSelected) {
				event.preventDefault()
				ratingDiv.classList.remove('valid')
			}
		})
	}
	const reviewForm = document.querySelector('.review-form')
	if (reviewForm) {
		reviewForm.addEventListener('submit', () => {
			let count = parseInt(localStorage.getItem('reviewCount') || '0')
			count += 1
			localStorage.setItem('reviewCount', count.toString())
		})
	}
}


function init() {
	populateProductOptions()
	setupRatingValidation()
	updateReviewCounter()
	setCurrentYear()
	setLastModified()
}

document.addEventListener('DOMContentLoaded', init)