window.AnimationLibrary.galaxy = {
    name: "Galaxy",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({ 
                angle: Math.random() * Math.PI * 2, 
                radius: Math.random() * 50,
                speed: Math.random() * 0.5 + 0.3
            });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        let rotatedAngle = seed.angle + time * seed.speed;
        let expandedRadius = seed.radius + Math.sin(time * 0.5) * 5;
        let z = (i / count - 0.5) * 80 + Math.cos(time * 0.3) * 10;
        
        return {
            x: Math.cos(rotatedAngle) * expandedRadius,
            y: Math.sin(rotatedAngle) * expandedRadius,
            z: z
        };
    }
};
