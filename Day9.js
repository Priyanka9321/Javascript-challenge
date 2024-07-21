// DAY 8: DOM Manipulation
// Activity 1 : Selecting and Manipulating Elements
// Task 1
function changeText() {
    // Select the element by its ID
    let element = document.getElementById('myElement');

    // Change the text content of the element
    element.textContent = "Chai Aur Code";
}

// Task 2
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the div and button elements
    let div = document.querySelector('.color-div');
    let button = document.querySelector('.color-button');

    button.addEventListener('click', () => {
        // Change the background color of the div
        div.style.backgroundColor = 'yellow';
        // Change the background color of the button
        button.style.backgroundColor = 'lightgreen';
    });
});

// Activity 2 : Creating and Appending Elements
// Task 3
document.addEventListener('DOMContentLoaded', (event) => {
    // Create new div element
    let newDiv = document.createElement('div');
    
    // Set the text content of the new div
    newDiv.textContent = 'This is a new div element.'
    newDiv.style.padding = '20px';

    // Append the new div into body
    document.body.appendChild(newDiv);
})

// Task 4
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and ul elements
    let ul = document.getElementById('my-list');
    let button = document.getElementById('add-item-button');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Create a new li element
        const newLi = document.createElement('li');

        // Set the text content of the new li
        newLi.textContent = 'Watermelon';

        // Append the new li to the ul
        ul.appendChild(newLi);
    });
});

// Activity 3 : Removing Elements
// Task 5
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the element to be removed
    let elementToRemove = document.getElementById('element-to-remove');
    let button = document.getElementById('remove-button');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Remove the element from the DOM
        elementToRemove.remove();
    })
})

// Task 6
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the ul elements
    let button = document.getElementById('remove-button');
    let ul = document.getElementById('my-list');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Check if the ul has any child nodes
        if (ul.lastChild) {
            // Remove the last child node of the ul
            ul.removeChild(ul.lastChild);
        }
    })
})

// Activity 4 : Modifying Attributes and Classes
// Task 7
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and the image elements
    let button = document.getElementById('change-src-button');
    let img = document.getElementById('my-image');

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Change the src attribute of the image
        img.setAttribute('src','https://i.pinimg.com/564x/84/73/8c/84738c08d47270d05f4f33c367b7baf7.jpg')
    });
});

// Task 8
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element and buttons
    let element = document.getElementById('my-element');
    let addButton = document.getElementById('add-class-button');
    let removeButton = document.getElementById('remove-class-button');

    // Add click event listener to the Add Class button
    addButton.addEventListener('click', () => {
        element.classList.add('highlight');
    });

    // Add click event listener to the Remove Class button
    removeButton.addEventListener('click', () => {
        element.classList.remove('highlight')
    });
});

// Activity 5 : Event Handling
// Task 9
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the paragraph and the button elements
    let paragraph = document.getElementById('my-paragraph');
    let button = document.getElementById('change-text-button');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Change the text content of the paragraph
        paragraph.textContent = 'The text has been changed!';
    });
});

// Task 10
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the element
    let box = document.getElementById('my-box');

    // Add a mouseover event listener to the element
    box.addEventListener('mouseover', () => {
        // Change the border color of the element
        box.style.borderColor = 'red';
    });
})