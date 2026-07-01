// FIXED: Properly structured standalone plugin registration module
window.AnimationLibrary.sphere = {
    name: "Cosmic Lattice Sphere",
    update: function(i, count, time) {
        // Fibonacci Golden Spiral distribution math for flawless global packaging
        let phi = Math.acos(-1 + (2 * i) / count);
        let theta = Math.sqrt(count * Math.PI) * phi;
        let radius = 42;
        
        return {
            x: radius * Math.cos(theta) * Math.sin(phi),
            y: radius * Math.sin(theta) * Math.sin(phi),
            z: radius * Math.cos(phi)
        };
    }
};