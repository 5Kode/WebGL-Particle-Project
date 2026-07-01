window.AnimationLibrary.torus = {
    name: "Donut",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({
                phase: Math.random() * Math.PI * 2
            });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        let u = (i / count) * Math.PI * 2;
        let v = time + seed.phase;
        
        let r = 40 + 15 * Math.cos(v);
        let x = (r + 20) * Math.cos(u) * Math.cos(v * 0.5);
        let y = (r + 20) * Math.sin(u) * Math.cos(v * 0.5);
        let z = 15 * Math.sin(v * 0.5) * Math.sin(time * 0.3);
        
        return { x: x, y: y, z: z };
    }
};