from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

playlists = {
    "happy": ["Happy Song 1", "Happy Song 2"],
    "sad": ["Sad Song 1", "Sad Song 2"],
    "angry": ["Angry Song 1", "Angry Song 2"]
}

@app.route("/playlist/<mood>")
def get_playlist(mood):
    url = playlists.get(mood)
    if url:
        return jsonify({"mood": mood, "url": url})
    else:
        return jsonify({"error": "Mood not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)