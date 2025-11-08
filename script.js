const form = document.getElementById('feedbackForm');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');
const feedbackCard = document.getElementById('feedback-card');

form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Hide the form with a fade/scale animation
    formContainer.classList.add('opacity-0', 'scale-95');
    
    // After animation, hide form and show success message
    setTimeout(() => {
        formContainer.classList.add('hidden');

        // Reveal success message
        successMessage.classList.remove('hidden');

        // Small delay to trigger the transition
        setTimeout(() => {
            successMessage.classList.remove('opacity-0', 'scale-95');
            // Adjust height smoothly
            feedbackCard.style.height = successMessage.offsetHeight + 'px';
        }, 10);
    }, 300);
});
