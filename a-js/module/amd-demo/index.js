require( ["./src/app.js", "./src/app1.js", "./src/m/app2.js"],
    function(a, b, c) {
        console.log(a, b, c)
    }
);
