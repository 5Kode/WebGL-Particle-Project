window.AnimationLibrary.hypercube = {
    name: "4D Tesseract",
    setup: function(count) {
        let vertices = [];
        // Generate uniform points across the 32 edges of a hypercube
        for(let i = 0; i < count; i++) {
            let edge = Math.floor(Math.random() * 8);
            let x = (edge & 1) ? 1 : -1;
            let y = (edge & 2) ? 1 : -1;
            let z = (edge & 4) ? 1 : -1;
            let w = Math.random() * 2 - 1; // 4th Dimensional coordinate axis
            
            // Randomly shuffle the variable axis components
            let axis = Math.floor(Math.random() * 4);
            if(axis === 0) [x, w] = [w, x];
            if(axis === 1) [y, w] = [w, y];
            if(axis === 2) [z, w] = [w, z];
            
            vertices.push({ x: x, y: y, z: z, w: w });
        }
        return vertices;
    },
    update: function(i, count, time, vertices) {
        let v = vertices[i];
        
        // Apply 4D rotation mathematics on the Z-W plane over time
        let cosT = Math.cos(time * 0.6);
        let sinT = Math.sin(time * 0.6);
        
        let rotZ = v.z * cosT - v.w * sinT;
        let rotW = v.z * sinT + v.w * cosT;
        
        // Perspective divide projection from 4D space down to 3D space
        let distance = 2.0;
        let factor = 40 / (distance - (rotW * 0.4));
        
        return {
            x: v.x * factor,
            y: v.y * factor,
            z: rotZ * factor
        };
    }
};