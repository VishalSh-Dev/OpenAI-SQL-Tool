import openaiClient from "./api.js";

const generate = async (query)=>{
    const result = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert the following natural language description into a SQL query: \n\n${query}.`,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return result.data.choices[0].text
}

export default generate