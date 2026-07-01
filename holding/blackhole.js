window.AnimationLibrary.blackhole = {
    name: "Blackhole",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({
                angle: Math.random() * Math.PI * 2,
                distanceSeed: Math.random(),
                speed: Math.random() * 1.5 + 0.5
            });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        
        // Loop radius proximity parameters over continuous timeline loops
        let flowProgress = (seed.distanceSeed + (time * seed.speed * 0.15)) % 1.0;
        
        // Particles transition from outer radius (70) down to event horizon boundary (4)
        let radius = 70 * (1.0 - flowProgress) + 4;
        let angle = seed.angle + (time * (40 / radius)); // Inward velocity increases spinning speed
        
        // Funnel throat depth calculations
        let depth = -Math.pow(65 / radius, 1.8) + 10;
        if(depth < -80) depth = -80; // Hard clamp singularity floor
        
        return {
            x: Math.cos(angle) * radius,
            y: depth,
            z: Math.sin(angle) * radius
        };
    }
};