// The global object sampleObject as defined previously.
const sampleObject = {
    red: "#FF0000",
    green: "#00FF00",
    white: "#FFFFFF"
};

/**
 * Checks if the global object `sampleObject` contains a given key.
 *
 * @param {string} key The key to check for in the `sampleObject`.
 * @returns {boolean} True if the `sampleObject` contains the key, false otherwise.
 */
function hasKey(key) {
    return key in sampleObject;
}

/**
 * Function to be called when the "Check Key" button is clicked.
 * It reads the input, calls hasKey, and displays the result.
 */
function checkKey() {
    const keyInput = document.getElementById('keyInput');
    const resultElement = document.getElementById('result');
    const key = keyInput.value.trim(); // Get the input value and remove leading/trailing whitespace

    if (key === "") {
        resultElement.textContent = "Please enter a key.";
        resultElement.style.color = '#ef4444'; // Red color for error
    } else {
        const exists = hasKey(key);
        if (exists) {
            resultElement.textContent = `The key '${key}' exists!`;
            resultElement.style.color = '#22c55e'; // Green color for success
        } else {
            resultElement.textContent = `The key '${key}' does NOT exist.`;
            resultElement.style.color = '#f97316'; // Orange color for not found
        }
    }
}
