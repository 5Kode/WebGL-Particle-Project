window.AnimationLibrary.chaos = {
    name: "Quantum Chaos",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({ u: Math.random(), v: Math.random(), speed: Math.random() * 1.5 + 0.5 });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        let theta = seed.u * 2.0 * Math.PI;
        let phi = Math.acos(2.0 * seed.v - 1.0);
        let r = 45 + Math.sin(time * seed.speed) * 6;
        return {
            x: r * Math.sin(phi) * Math.cos(theta),
            y: r * Math.sin(phi) * Math.sin(theta),
            z: r * Math.cos(phi)
        };
    }
};