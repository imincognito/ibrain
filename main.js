<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
        }

        #chat-container {
            max-width: 400px;
            width: 100%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            overflow: hidden;
            margin-bottom: 20px;
        }

        #chat-box {
            height: 300px;
            padding: 10px;
            overflow-y: scroll;
            background-color: #fff;
        }

        #user-input {
            width: 70%;
            padding: 10px;
            border: none;
            border-top: 1px solid #ccc;
            margin-bottom: 10px;
        }

        #voice-btn {
            width: 30%;
            padding: 10px;
            border: none;
            background-color: #4CAF50;
            color: #fff;
            cursor: pointer;
        }

        #voice-btn:hover {
            background-color: #45a049;
        }
    </style>
    <title>Voice Assistant with Wikipedia</title>
</head>
<body>
    <div id="chat-container">
        <div id="chat-box"></div>
        <input type="text" id="user-input" placeholder="Type your message...">
        <button id="voice-btn" onclick="startVoiceRecognition()">Voice</button>
    </div>
    <script>
        function sendMessage(message) {
            var chatBox = document.getElementById("chat-box");
            chatBox.innerHTML += "<p>User: " + message + "</p>";
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function startVoiceRecognition() {
            var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
            recognition.onresult = function (event) {
                var transcript = event.results[0][0].transcript;
                document.getElementById("user-input").value = transcript;
                sendMessage(transcript);
                performWikipediaSearch(transcript);
            };

            recognition.start();
        }

        function performWikipediaSearch(query) {
            var chatBox = document.getElementById("chat-box");

            var apiUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent(query);

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    var page = data.query.pages[Object.keys(data.query.pages)[0]];

                    if (page.extract) {
                        var snippet = page.extract.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
                        chatBox.innerHTML += "<p>AI: " + snippet + "</p>";
                    } else {
                        chatBox.innerHTML += "<p>AI: No information found for " + query + "</p>";
                    }

                    chatBox.scrollTop = chatBox.scrollHeight;
                })
                .catch(error => {
                    console.error("Error fetching Wikipedia data:", error);
                    chatBox.innerHTML += "<p>AI: Error fetching Wikipedia data</p>";
                    chatBox.scrollTop = chatBox.scrollHeight;
                });
        }
    </script>
</body>
</html>