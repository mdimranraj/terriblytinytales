# "Visualise"
This project was built for the placement round of Terribly Tiny Tales.

# Hosted Site Link
https://visualise-imran.vercel.app/

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



