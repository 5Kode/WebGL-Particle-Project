window.AnimationLibrary.torusknot = {
    name: "Flat Torus Knot",
    update: function(i, count, time) {
        // Distribute points sequentially along the knot's curve path
        let t = (i / count) * Math.PI * 2 * 12 + (time * 0.5);
        
        // P and Q dictate the winding number geometry of the knot
        let p = 3; 
        let q = 7;
        
        let r = 30 + Math.sin(q * t) * 6;
        
        let x = r * Math.cos(p * t);
        let y = r * Math.sin(p * t);
        let z = r * Math.cos(q * t);
        
        return { x: x, y: y, z: z };
    }
};