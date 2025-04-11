const techniques = [
	{
		id: '1',
		name: 'Pomodoro Technique',
		averagerating: 4.5
	},
	{
		id: '2',
		name: 'Active Recall',
		averagerating: 4.7
	},
	{
		id: '3',
		name: 'Spaced Repetition',
		averagerating: 3.5
	},
	{
		id: '4',
		name: 'Feynman Technique',
		averagerating: 3.9
	},
	{
		id: '5',
		name: 'SMART Goals',
		averagerating: 5.0
	},
	{
		id: '6',
		name: 'Time Blocking',
		averagerating: 4.5
	},
	{
		id: '7',
		name: 'Eisenhower Matrix',
		averagerating: 4.7
	},
	{
		id: '8',
		name: 'Mind Mapping',
		averagerating: 3.5
	},
	{
		id: '9',
		name: 'Cornell Note Taking',
		averagerating: 3.9
	},
	{
		id: '10',
		name: 'SQ3R Reading Method',
		averagerating: 5.0
	},
	{
		id: '11',
		name: 'Paretto Principle',
		averagerating: 4.5
	},
	{
		id: '12',
		name: 'Flow State',
		averagerating: 4.7
	},
	{
		id: '13',
		name: 'Dual Coding',
		averagerating: 3.5
	},
	{
		id: '14',
		name: 'Interleaving Practice',
		averagerating: 3.9
	},
	{
		id: '15',
		name: 'Metacognition',
		averagerating: 5.0
	},
	{
		id: '16',
		name: 'Growth Mindset',
		averagerating: 4.5
	},
	{
		id: '17',
		name: 'Deep Work',
		averagerating: 4.7
	},
	{
		id: '18',
		name: 'Self-Regulated Learning',
		averagerating: 3.5
	},
	{
		id: '19',
		name: 'Goal Setting Theory',
		averagerating: 3.9
	},
	{
		id: '20',
		name: 'Deliberate Practice',
		averagerating: 5.0
	},
	{
		id: '21',
		name: 'Habit Stacking',
		averagerating: 4.5
	}
]

const techniquesSelect = document.getElementById('technique')
const currentYearSpan = document.getElementById('current-year')
const lastModifiedSpan = document.getElementById('last-modified')
const ratingDiv = document.querySelector('.rating')
const ratingInputs = document.querySelectorAll('input[name="rating"]')
const reviewCountSpan = document.getElementById('review-count')

function populateProductOptions() {
	if (!techniquesSelect) return
	techniques.forEach((technique) => {
		const option = document.createElement('option')
		option.value = technique.name
		option.textContent = technique.name.charAt(0).toUpperCase() + technique.name.slice(1)
		techniquesSelect.appendChild(option)
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