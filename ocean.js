window.AnimationLibrary.ocean = {
    name: "Geometric Wave Ocean",
    update: function(i, count, time) {
        let rows = Math.sqrt(count);
        let posX = (i % rows) - (rows / 2);
        let posZ = Math.floor(i / rows) - (rows / 2);
        let x = posX * 2.4;
        let z = posZ * 2.4;
        return {
            x: x,
            y: Math.sin(x * 0.07 + time) * Math.cos(z * 0.07 + time) * 10,
            z: z
        };
    }
};