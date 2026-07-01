window.AnimationLibrary.cylinder = {
    name: "Cylinder",
    update: function(i, count, time) {
        let theta = (i / count) * Math.PI * 2 * 35;
        return {
            x: 35 * Math.sin(theta),
            y: ((i / count) * 90) - 45,
            z: 35 * Math.cos(theta)
        };
    }
};