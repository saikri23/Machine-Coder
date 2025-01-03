Design a Todo list web application using Vanilla JavaScript.
The application should allow users to:

Requirements:

- Functionality: Adding, editing, and deleting tasks.
- User Interface: Intuitive and easy to use.
- Error Handling: Errors should me handled effectively.
- Code Quality: Well-structured, readable, and organized.

Learnings:

1. DOMContentLoaded event listener should be added this is the best practice to be followed which ensures the content has been loaded properly.

2. event.preventDefault()- Any default behavior can be stopped in this way.
   By default, submitting a form reloads the page. You can use preventDefault to stop this behavior.

3. todoText.value.trim() any trailing and before spaces will be removed

4. Added even listener at global parent so that many event listeners are not attached to the webpage (event delegation(event bubbling))

5. focus on edit to ensure the app is accessible.
