window.AnimationLibrary.tornado = {
    name: "Plasma Vortex",
    update: function(i, count, time) {
        // Distribute height from bottom (-70) to top (70)
        let y = ((i / count) * 140) - 70; 
        
        // Radius gets exponentially wider at the top of the funnel
        let radius = Math.pow(y + 70, 0.65) * 1.8 + 2; 
        
        // Spin the tornado backwards against the time clock
        let theta = (i / count) * Math.PI * 2 * 25 - (time * 3.5); 
        
        return {
            x: radius * Math.cos(theta),
            y: y,
            z: radius * Math.sin(theta)
        };
    }
};