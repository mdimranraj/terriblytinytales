# "Visualise"
This project was built for the placement round of Terribly Tiny Tales.

# Hosted Site Link
https://visualise-imran.vercel.app/

*Note : If the graph does not load, check your internet connection and wait. Or go back to the landing page and try again.

# Technology
1. React.js
2. HTML5
3. CSS3
4. Bootstrap 5.0
5. JavaScript
### Modules used
1. axios (for API fetching)
2. react-router-dom (for links in SPA)
3. recharts (for the histogram)

# Components and Page Flow
It's a single page application (SPA) with 2 views.

1. The Landing Page contains a Navbar and a Footer component.
2. There is only a button "Get Data" in the middle of the page.

Upon pressing the button "Get Data", the page re-directs to "/chartData".

1. This page has a Histogram that displays the data corresponding to the frequency of top 20 most repeated words from the API " https://www.terriblytinytales.com/test.txt "
2. There is an "EXPORT" button below the graph, which downloads the .csv file for the data displayed in the graph.

# Component details
There are 5 components in the project ( I have not made a pages section since it's a small project ).
1. Navbar
2. Footer
3. Home
4. GetData
5. Home

When the project loads, the entry point is index.js which calls the App.js.
### App.js
It contains the routes for the application. They are :
1. Home route ( / )
2. Chart Data route ( /chartData )

### Home route
It has a button "Get Data" which redirects to "/chartData" and calls the component "GetData.jsx".

### GetData.jsx
It calls for the API to get the data using "Axios" module. Counts the number of words in the document and finds the frequency of each word and extracts the top 20 words.
It calls the component "Chart.jsx" with the top 20 words and their frequency as props, which then renders the histogram.

### Chart.jsx
This component recieves a prop which contains the data for the top 20 words.
Using that data it makes a chart using the "recharts" module.

# Component flow 
index.js => app.js => Home.jsx => GetData.jsx => Chart.jsx


## Thank You
For any suggestions, feel free to fork the project and make changes and send a P.R. or drop a message in the issues section. Thanks.

=======================================================================================================
