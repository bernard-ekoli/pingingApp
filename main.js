const query = document.getElementById('query');
const button = document.getElementsByTagName('button')[0];

async function search() {
    const searchQuery = query.value;
    const corsProxy = 'https://api.allorigins.win/raw?url='; // Updated CORS proxy
    const startTime = performance.now(); // Start timing

    try {
        let data = await fetch(corsProxy + searchQuery, { method: 'HEAD' });
        const endTime = performance.now(); // End timing
        const timeTaken = endTime - startTime; // Calculate time taken

        if (data.ok) {
            alert(`Your Ping was completed in ${timeTaken.toFixed(2)} ms, and the website is reachable for any communication.`);
        } else {
            alert('The URL does not exist or is unreachable!');
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

button.addEventListener('click', search);
