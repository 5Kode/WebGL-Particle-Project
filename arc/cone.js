window.AnimationLibrary.spiral = {
    name: "Infinite Cone",
    setup: function(count) {
        let seeds = [];
        for (let i = 0; i < count; i++) {
            seeds.push({
                offset: Math.random() * Math.PI * 2
            });
        }
        return seeds;
    },
    update: function(i, count, time, seeds) {
        let seed = seeds[i];
        let t = (i / count) * Math.PI * 4 + time * 1.5 + seed.offset;
        let radius = 10 + (i / count) * 35;
        let height = (i / count) * 100 - 50;
        
        return {
            x: radius * Math.cos(t),
            y: height + Math.sin(time * 2) * 8,
            z: radius * Math.sin(t)
        };
    }
};