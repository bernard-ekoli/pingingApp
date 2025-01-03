const query = document.getElementById('query');
const button = document.getElementsByTagName('button')[0];

// Function to validate a URL
const isValidURL = (url) => {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
};

// Function to perform the ping
async function search() {
    const searchQuery = query.value;
    const corsProxy = 'https://api.allorigins.win/raw?url='; // CORS proxy
    const startTime = performance.now(); // Start timing

    // Validate the URL
    if (!isValidURL(searchQuery)) {
        alert('Invalid URL! Please enter a valid URL.');
        return;
    }

    try {
        let response = await fetch(corsProxy + searchQuery, { method: 'HEAD' });
        const endTime = performance.now(); // End timing
        const timeTaken = endTime - startTime; // Calculate time taken

        if (response.ok) {
            alert(
                `Ping successful! Time: ${timeTaken.toFixed(
                    2
                )} ms. Status: ${response.status} ${response.statusText}`
            );
        } else {
            alert(
                `Ping failed. Status: ${response.status} ${response.statusText}`
            );
        }
    } catch (error) {
        alert(
            `Error: ${error.message}. The URL may be unreachable or invalid.`
        );
    }
}

// Add click event listener
button.addEventListener('click', search);
