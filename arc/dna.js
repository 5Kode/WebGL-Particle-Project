window.AnimationLibrary.dna = {
    name: "DNA Spiral",
    update: function(i, count, time) {
        let pct = i / count;
        let height = (pct * 120) - 60;
        let t = pct * Math.PI * 16 + (time * 1.5);
        let radius = 25;
        
        let x, y, z;
        
        // Split particles: 40% strand A, 40% strand B, 20% connecting base-pair rungs
        if (pct < 0.4) {
            // Strand A
            let angle = (pct / 0.4) * Math.PI * 16 + (time * 1.5);
            x = radius * Math.cos(angle);
            y = (pct / 0.4) * 120 - 60;
            z = radius * Math.sin(angle);
        } else if (pct < 0.8) {
            // Strand B (Offset by 180 degrees)
            let angle = ((pct - 0.4) / 0.4) * Math.PI * 16 + (time * 1.5) + Math.PI;
            x = radius * Math.cos(angle);
            y = ((pct - 0.4) / 0.4) * 120 - 60;
            z = radius * Math.sin(angle);
        } else {
            // Interstitial connecting rungs
            let rungPct = (pct - 0.8) / 0.2;
            let segment = Math.floor(rungPct * 40);
            let targetHeightPct = segment / 40;
            
            let angle = targetHeightPct * Math.PI * 16 + (time * 1.5);
            let linearInterpolation = (Math.sin(i * 50) + 1) / 2; // Linear position along rung
            
            let xA = radius * Math.cos(angle);
            let zA = radius * Math.sin(angle);
            let xB = radius * Math.cos(angle + Math.PI);
            let zB = radius * Math.sin(angle + Math.PI);
            
            x = xA + (xB - xA) * linearInterpolation;
            y = targetHeightPct * 120 - 60;
            z = zA + (zB - zA) * linearInterpolation;
        }
        
        return { x: x, y: y, z: z };
    }
};