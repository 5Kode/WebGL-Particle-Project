from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/animations")
def get_animations():
    """
    Dynamically load all animation files from static/animations directory
    """
    animations_dir = os.path.join('static', 'animations')
    animations = []
    
    if os.path.exists(animations_dir):
        for filename in os.listdir(animations_dir):
            if filename.endswith('.js') and not filename.startswith('.'):
                # Extract animation name from filename (e.g., sphere.js -> sphere)
                anim_name = filename.replace('.js', '')
                animations.append({
                    'filename': filename,
                    'name': anim_name
                })
    
    return {'animations': sorted(animations, key=lambda x: x['filename'])}

if __name__ == "__main__":
    app.run(debug=True)
