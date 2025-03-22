// Get the elements from DOM
const currentYearElement = document.querySelector('#currentyear')
const lastModifiedElement = document.querySelector('#lastmodified')
const windChillElement = document.querySelector('.weather__item:last-child .weather__value')

// Current year in footer
currentYearElement.textContent = new Date().getFullYear()

// Last modified date in the footer
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`

// Hardcoded temperature and wind speed (matching displayed values)
const temperature = 27 // °C
const windSpeed = 15 // km/h

/**
 * Calculate the wind chill factor using the metric formula
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} - Wind chill factor in Celsius
 */
function calculateWindChill(temp, speed) {
	return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
}

// Display the wind chill
function displayWindChill() {
	// Conditions for wind chill calculation (metric)
	if (temperature <= 10 && windSpeed > 4.8) {
		// Calculate wind chill and round to 2 decimal places
		const windChill = calculateWindChill(temperature, windSpeed).toFixed(2)
		// Display wind chill
		windChillElement.textContent = `${windChill} °C`
	} else {
		// Display N/A if conditions are not met
		windChillElement.textContent = 'N/A'
	}
}

// Run the wind chill calculation when the page loads
displayWindChill()