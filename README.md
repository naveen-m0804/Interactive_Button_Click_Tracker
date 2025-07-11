# Interactive_Button_Click_Tracker
## Date: 11-07-2025
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ClickCounter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>ClickCounter</h1>
    <button id="clickBtn">Click Me</button>
    <p>You've clicked <span id="count">0</span> times.</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

button {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #388e3c;
}

p {
  font-size: 20px;
  margin-top: 20px;
}

span#count {
  font-weight: bold;
  color: #4CAF50;
}
```
## JavaScript Code:
```js
function createCounter() {
  let count = 0; 

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

document.getElementById('clickBtn').addEventListener('click', () => {
  const currentCount = counter(); 
  document.getElementById('count').innerText = currentCount;
});
```
## Output:
![alt text](Output.png)
## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
