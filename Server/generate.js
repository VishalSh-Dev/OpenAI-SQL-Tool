import openaiClient from "./api.js";

const generate = async (query) => {
    const result = await openaiClient.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Convert the following natural language description into a SQL query: \n\n${query}.`,
        max_tokens: 100,
        temperature: 0,
    });
    return result.choices[0].text
}

export default generate