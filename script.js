// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()

const posterQuote = document.getElementById("poster-quote");
const posterTitle = document.getElementById("poster-title");
const posterImage = document.getElementById("poster-image");

const formQuote = document.getElementById("poster-form-quote");
const formTitle = document.getElementById("poster-form-title");
const randomButton = document.getElementById('randomize');
const submitButton = document.getElementById("submit");

// Array of predefined poster objects
const posters = [
    {
        image: 'https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        title: 'A mountain covered in clouds in the distance',
        quote: 'There is no human problem which could not be solved if people would simply do as I advise.',
    },
    {
        image: 'https://images.unsplash.com/photo-1687172902141-67b20be1df71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        title: 'In the middle of a grassy field',
        quote: 'Three things matter in a speech: who says it, how he says it, and what he says, and of the three, the last matters least.',
    },
    {
        image: 'https://media.istockphoto.com/id/157605739/photo/goggles.jpg?s=612x612&w=0&k=20&c=OkJO32XF7rgBKUQH3jkKgAkCWdplvTjdYSDr8bcu7vo=',
        title: 'Milky Way Panorma',
        quote: 'How we spend our days is, of course, how we spend our lives.',
    },
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
randomButton.addEventListener('click', () => generateRandomPoster(posters));

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
submitButton.addEventListener('click', generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster(posters) {
    // TODO: Generate a random index within the range of the posters array length
    let index = Math.floor(Math.random() * posters.length);
    // TODO: Retrieve the random poster object from the posters array
    let post = posters[index];

    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(post.image, post.title, post.quote);

}

// Function to generate a custom poster
function generateCustomPoster(event) {
    event.preventDefault();

    // TODO: Retrieve the entered quote and title from the input fields
    const newQuote = formQuote.value;
    const newTitle = formTitle.value;

    // TODO: Create a custom poster object with the entered values
    const customPoster = {
        image: "https://images.unsplash.com/photo-1611794485509-701be5a5d4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW4lMjBibHVlfGVufDB8fDB8fHww&w=1000&q=80", 
        title: newTitle,
        quote: newQuote
    };

    // Add the new poster object to the posters array
    posters.push(customPoster);

    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(customPoster.image, customPoster.title, customPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    posterImage.src = imageUrl;
    posterTitle.textContent = title;
    posterQuote.textContent = quote;
}
