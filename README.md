# Requirements

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

- Create state variables to store the current number of cookies and the cookies PerSecond value (useState)
- Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.
- Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.
- Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

🏹 Feel free to add any other reflections you would like to share about your submission e.g.

Struggled to work out what the file structure should be. I originally made too many components but now am unsure if certain components should be nested in another and how I can get them to interact with each other

Maybe counter should have just been in app as so many things interacting with it?
Should other components be put in counter as this is where a lot of the js combines or should I have put them all in app
UPDATE - moved counter code into app as it was its own componenet so all other child components can use the global variables

Cookie.jsx should of been part of counter really as not sure it was worth setting up its own component, originally thought it might be needed

Struggled a lot to understand where things are being called component to component and how to use props correctly

Setting up shop but needs to be linked to timer and counter as need to check if there are enough cookies and also update the cookiesPerSecond
UPDATE - shop now has a function on click to pass to App.jsx which then updates both of the counters. This has however has caused an issue where the cookiePerSecond are not adding to the total if a click is made on the main cookie
