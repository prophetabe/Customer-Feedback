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
       const feedbackItem = document.createElement('div');
       feedbackItem.classList.add('feedback-item');
       
       const feedbackName = document.createElement('h3');
       feedbackName.textContent = `Name: ${name}`;
       
       const feedbackRating = document.createElement('p');
       feedbackRating.textContent = `Rating: ${rating}`;
       
       const feedbackComments = document.createElement('p');
       feedbackComments.textContent = `Comments: ${comments}`;
       
       feedbackItem.appendChild(feedbackName);
       feedbackItem.appendChild(feedbackRating);
       feedbackItem.appendChild(feedbackComments);

       feedbackDisplay.appendChild(feedbackItem);

       form.reset();
    });
});
// Commit: "Finalize feedback display functionality."