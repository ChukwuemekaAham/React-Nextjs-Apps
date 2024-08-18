/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		return new Response('Hello World!');
// 	},
// } satisfies ExportedHandler<Env>;

import OpenAI from 'openai';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

type Bindings = {
	GEMINI_KEY: string;
	OPEN_AI_KEY: string;
	AI: Ai;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(
	'/*',
	cors({
		origin: '*', // Allow requests from your Next.js app
		allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests', 'Content-Type'], // Add Content-Type to the allowed headers to fix CORS
		allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT'],
		exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		maxAge: 600,
		credentials: true,
	})
);


app.post('/chatToDocument', async (c) => {
	// const openai = new OpenAI({
	// 	apiKey: c.env.OPEN_AI_KEY,
	// });

	const genAI = new GoogleGenerativeAI(c.env.GEMINI_KEY);

	const { documentData, question } = await c.req.json();

	const model = genAI.getGenerativeModel({ 
	model: "gemini-1.5-flash", 
	generationConfig: {
    candidateCount: 1,
    stopSequences: ["x"],
    maxOutputTokens: 50,
    temperature: 0.5,
	}, 
	});

	// const chatCompletion = await openai.chat.completions.create({
	// 	messages: [
	// 		{
	// 			role: 'system',
	// 			content:
	// 				'You are a assistant helping the user to chat to a document, I am providing a JSON file of the markdown for the document. Using this, answer the users question in the clearest way possible, the document is about ' +
	// 				documentData,
	// 		},
	// 		{
	// 			role: 'user',
	// 			content: 'My Question is: ' + question,
	// 		},
	// 	],
	// 	model: 'gpt-4o',
	// 	temperature: 0.5,
	// });

	const chatCompletionGemini = await model.generateContent({
		contents: [
		{
		role: "user",
		parts: [{ text: 'My Question is: ' + question }],
		},
		{
		role: "model",
		parts: [{ text: 'You are a assistant helping the user to chat to a document, I am providing a JSON file of the markdown for the document. Using this, answer the users question in the clearest way possible, the document is about ' + documentData }],
		},
	]});
	
	// const response = chatCompletion.choices[0].message.content;

	const response = chatCompletionGemini.response.text();

	return c.json({ message: response });
});

app.post('/translateDocument', async (c) => {
	const { documentData, targetLang } = await c.req.json();

	// generate a summary of the document
	const summaryResponse = await c.env.AI.run('@cf/facebook/bart-large-cnn', {
		input_text: documentData,
		max_length: 1000,
	});

	// translate the summary to another language
	const response = await c.env.AI.run('@cf/meta/m2m100-1.2b', {
		text: summaryResponse.summary,
		source_lang: 'english', // defaults to english
		target_lang: targetLang,
	});

	return new Response(JSON.stringify(response));
});

export default app;

