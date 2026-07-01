window.AnimationLibrary.wave = {
    name: "Harmonic Wave",
    update: function(i, count, time) {
        let rows = Math.sqrt(count);
        let x = (i % rows) - (rows / 2);
        let z = Math.floor(i / rows) - (rows / 2);
        
        let wave1 = Math.sin(x * 0.15 + time * 2) * 15;
        let wave2 = Math.cos(z * 0.15 + time * 1.5) * 10;
        let y = wave1 + wave2 + Math.sin(time * 3) * 5;
        
        return {
            x: x * 2.2,
            y: y,
            z: z * 2.2
        };
    }
};