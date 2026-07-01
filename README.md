  Welcome to my WebGL Particle Simulator! This project was built upon Python 3.13 and JavaScript.
This is one of my first repositories on GitHub, and I am more than happy to share this project with you all.

  My project is a high-performance, interactive particle engine built with Three.js and backed by a dynamic Flask asset pipeline. 
The application maps thousands of simultaneous points into complex, mathematically driven 3D shapes.

  Core feature:
  Dynamic Plug and Play

  Within the branch, you will find the static folder, which has the animations folder. As of now, I only have 5 animations made, but here is where everything comes
  together. All you need to do to add more animations is drop the JavaScript file into static/animations and relaunch the Flask app. Everything will automatically 
  register and populate appropriately on the UI. 

  Use the snippet below to build your own custom animation it allows you to attach a plugin definition directly onto the global window.AnimationLibrary 
  object using this exact pattern:

window.AnimationLibrary.myNewShape = {
    name: "My New Shape", // Displays on the dashboard HUD
    setup: function(count) {
        // Optional: Run one-time calculations or generate coordinate seeds
        let seeds = [];
        for (let i = 0; i < count; i++) { seeds.push(Math.random()); }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        // Required: Return individual x, y, z coordinate targets per frame
        return {
            x: Math.sin(time + i) * 30,
            y: (i / count) * 80 - 40,
            z: Math.cos(time + i) * 30
        };
    }
};

You can additionally use the .html file in the /guide folder.

To run my project, you must have Python 3.8 or higher and Flask installed via pip
Then simply download the .zip or the top release, and run it from your terminal of choice in your chosen directory with: python app.py.

Thanks! 

PS: I also doubt that you would even download this project. It is insignificant and provides no solution to anything. 

