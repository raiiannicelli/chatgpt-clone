const {configuration, OpenAI} = require("openai")

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });
        return new OpenAIApi(configuration)
    }

    static textCompletion({prompt}){
        return {
            model: "gpt-4.1",
            message: `${prompt}`,
            response_format: {
                "type": "text"
                },
            temperature: 1,
            max_completion_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        }
    }
}