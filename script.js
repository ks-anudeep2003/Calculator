document.addEventListener("DOMContentLoaded", () => {
  // Accessing the HTML elements
  const result = document.querySelector("#result");
  const btnContainer = document.querySelector(".container");

  // Adding functionality to buttons -- mouse events
  btnContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === "INPUT" && target.type === "button") {
      handleInput(target.value);
    }
  });

  // Adding functionality for keyboard events
  result.addEventListener("keydown", (e) => {
    const key = e.key;

    if (
      (key >= "0" && key <= "9") ||
      ["+", "-", "*", "%", "/", ".", "Backspace", "Delete", "Enter"].includes(
        key
      )
    ) {
      handleInput(key);
    }
  });

  // Function to handle both mouse and keyboard events
  function handleInput(input) {
    if (input === "C" || input === "Delete") {
      result.value = "";
    } else if (input === "✂" || input === "Backspace") {
      result.value = result.value.slice(0, -1);
    } else if (input === "=" || input === "Enter") {
      calculate(result.value);
    } else {
      updateScreen(input);
    }
  }

  // Function to display the entered values by the user on the screen
  function updateScreen(value) {
    if (result.value === "Error") {
       result.value = ""; // Clear the screen if there was an error
    }
    result.value += value;
  }

  // Function to calculate the results
  function calculate(expression) {
    if (result.value === "Error") {
      result.value = ""; // Clear the screen if there was an error
    }else{
      try {
        result.value = eval(expression);
      } catch (error) {
        result.value = "Error";
      }
    }
    
  }
});
