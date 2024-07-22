// DAY 10: Event Handling
// Activity 1 : Basic Event Handling
// Task 1
document.addEventListener("DOMContentLoaded", (event) => {
  let paragraph = document.getElementById("my-text");
  let button = document.getElementById("change-text");

  button.addEventListener("click", () => {
    paragraph.textContent = "Chai Aur Code";
  });
});

// Task 2
document.addEventListener("DOMContentLoaded", (event) => {
  let image = document.getElementById("myImage");

  image.addEventListener("dblclick", () => {
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

// Activity 2 : Mouse Events
// Task 3
document.addEventListener("DOMContentLoaded", (event) => {
  let element = document.getElementById("myElement");

  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "lightgreen";
  });
});

// Task 4
document.addEventListener("DOMContentLoaded", (event) => {
  let element = document.getElementById("myElement");

  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "lightblue";
  });
});

// Activity 3 : Keyboard Events
// Task 5
document.addEventListener("DOMContentLoaded", (event) => {
  let inputField = document.getElementById("myInput");

  inputField.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
  });
});

// Task 6
document.addEventListener("DOMContentLoaded", (event) => {
  let inputField = document.getElementById("my-Input");
  let displayParagraph = document.getElementById("displayParagraph");

  inputField.addEventListener("keyup", () => {
    displayParagraph.textContent = `Current value: ${inputField.value}`;
  });
});

// Activity 4 : Form Events
// Task 7
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    const formData = new FormData(form); // Collects form data

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log("Form Data:", data); // Logs the form data to the console
  });
});

// Task 8
document.addEventListener('DOMContentLoaded', (event) => {
    let selectElement = document.getElementById('mySelect');
    let displayParagraph = document.getElementById('display-Paragraph');

    selectElement.addEventListener('change', (event) => {
        displayParagraph.textContent = `Selected Value: ${selectElement.value}`;
    });
});

// Activity 5 : Event Delegation
// Task 9
document.addEventListener('DOMContentLoaded', () => {
    let list = document.getElementById('myList');
  
    list.addEventListener('click', (event) => {
      if (event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
      }
    });
});

// Task 10
document.addEventListener('DOMContentLoaded', (event) => {
    let list = document.getElementById('my-List');
    let button = document.getElementById('addItemButton');

    // Event listener for the parent element (ul)
    list.addEventListener('click', (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            console.log(`Clicked item: ${event.target.textContent}`);
        }
    });

    // Function to add a new list item
    let addListItem = () => {
        let newItem = document.createElement('li');
        newItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(newItem);
    }
    
    // Event listener for the "Add Item" button
    button.addEventListener('click', addListItem);
})