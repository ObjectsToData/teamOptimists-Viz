# Team Optimists Visualisation Tool

THE CODE

jQuery enables us store the JSON-data into an array called imgTags. Every element then gets put into a bunch of HTML-tags, and finally it gets appended to the right container. We have two important containers, which both have their own seperate ‘Isotope’ running. Isotope is a jQuery-plugin which enabled us to sort, filter and layout the data/images. This way we we’re able to filter on different sections of the New York Times (simply by adding a section in the div-class). By using the sort method we we’re able to sort by article length, brightness, hue, saturation and the amount of shapes in an image.

Most important files

index > https://github.com/ObjectsToData/teamOptimists-Viz/blob/master/src/index.html

javascript > https://github.com/ObjectsToData/teamOptimists-Viz/blob/master/src/scripts/app.js

css > https://github.com/ObjectsToData/teamOptimists-Viz/blob/master/src/styles/main.scss

Flexibility of the images

Every image is made fluid using css. This way the container get always filled with images and it gives us a lot flexibility. jQuery-UI made it possible to resize the div container. Because of the flexibility of the images, all our images get automatically resized.

DESIGN
Our design is mainly focussed on the content itself. All images are stitched closely together, without any distracting borders. The two countries have been seperated from each other with a subtle shadow. The ‘administrative debris’ (Tufte, Visual explanations) has been limited to one single bar. When the user scrolls down the screen is almost completely filled with content.
