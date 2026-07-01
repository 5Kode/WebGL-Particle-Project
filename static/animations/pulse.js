window.AnimationLibrary.pulse = {
    name: "Radial Pulse",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({
                theta: Math.random() * Math.PI * 2,
                phi: Math.random() * Math.PI
            });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        let pulse = Math.sin(time * 3) * 0.5 + 0.5;
        let radius = 20 + pulse * 30;
        let wave = Math.sin(time + i / count * Math.PI * 2) * 5;
        
        return {
            x: Math.sin(seed.phi) * Math.cos(seed.theta) * radius + wave,
            y: Math.cos(seed.phi) * radius,
            z: Math.sin(seed.phi) * Math.sin(seed.theta) * radius + wave
        };
    }
};