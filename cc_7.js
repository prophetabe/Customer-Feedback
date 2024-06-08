//U81623325
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;


        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

        const feedbackEntry = document.createElement('div');
        feedbackEntry.classList.add('feedback-entry');

        const feedbackName = document.createElement('p');
        feedbackName.textContent = `Name: ${name}`;
        feedbackEntry.appendChild(feedbackName);

        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating}`;
        feedbackEntry.appendChild(feedbackRating);

        const feedbackComments = document.createElement('p');
        feedbackComments.textContent = `Comments: ${comments}`;
        feedbackEntry.appendChild(feedbackComments);
// Commit : "Implement form validation and feedback display logic."
        feedbackDisplay.appendChild(feedbackEntry);

        feedbackForm.reset();
    });
});
// Commit: "Finalize feedback display functionality."