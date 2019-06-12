const express = require("express"); //import the NPM dependency package

const app     = express();//initialise express() inside and write to the app variable

require("./routes/userRoutes")(app); 
                                     //import route module and pass your app

const PORT    = 5000; //choose what port on which to run the server

app.listen(PORT, () => {
  console.log(`Server running`); // use the app variable and listen on the port
});







