window.AnimationLibrary.matrix = {
    name: "3D Martix",
    update: function(i, count, time) {
        // Calculate a 3D grid bounding box based on total particles
        let side = Math.ceil(Math.cbrt(count)); 
        let spacing = 6.5; // Distance between points
        
        // 3D Matrix index unwrapping math
        let posX = (i % side) - (side / 2);
        let posY = (Math.floor(i / side) % side) - (side / 2);
        let posZ = Math.floor(i / (side * side)) - (side / 2);
        
        return {
            x: posX * spacing,
            y: posY * spacing,
            z: posZ * spacing
        };
    }
};