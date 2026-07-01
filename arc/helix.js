window.AnimationLibrary.helix = {
    name: "Double Helix",
    update: function(i, count, time) {
        let t = (i / count) * Math.PI * 12 + time * 2;
        let height = (i / count) * 100 - 50;
        let radius = 30;
        
        let strand = Math.floor((i / count) * 2);
        let phase = strand * Math.PI;
        
        return {
            x: radius * Math.cos(t + phase),
            y: height,
            z: radius * Math.sin(t + phase)
        };
    }
};