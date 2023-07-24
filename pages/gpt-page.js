<!DOCTYPE html>
<html>
<head>
    <title>Ask Questions with GPT-3.5</title>
</head>
<body>
    <h1>Ask Questions</h1>
    <textarea id="inputQuestion" rows="4" cols="50" placeholder="Type your question here..."></textarea>
    <br>
    <button onclick="askQuestion()">Ask</button>
    <div id="outputAnswer"></div>

    <script>
        // Replace 'YOUR_API_KEY' with your actual GPT-3.5 API key
        const apiKey = 'YOUR_API_KEY';

        // Function to ask the question using GPT-3.5 API
        async function askQuestion() {
            const inputQuestion = document.getElementById('inputQuestion').value;

            // Check if the user entered a question
            if (!inputQuestion) {
                alert("Please enter a question before asking!");
                return;
            }

            // Replace 'temperature' and 'max_tokens' with desired values for response generation
            const prompt = `Question: ${inputQuestion}\nAnswer:`;

            try {
                const response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        temperature: 0.7,
                        max_tokens: 100,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to get a response from the server.");
                }

                const data = await response.json();
                const answer = data.choices[0].text;

                // Display the answer
                document.getElementById('outputAnswer').innerHTML = `<h3>Answer:</h3><p>${answer}</p>`;
            } catch (error) {
                console.error("Error:", error.message);
                alert("An error occurred while processing your request. Please try again later.");
            }
        }
    </script>
</body>
</html>
