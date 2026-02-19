
import { GoogleGenAI } from "@google/genai";
import { RobotVacuum } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getRecommendation(userQuery: string, availableRobots: RobotVacuum[]): Promise<string> {
    const context = `
      You are an expert on robotic vacuum cleaners in the UK. 
      Here is the current catalog of vacuums:
      ${JSON.stringify(availableRobots, null, 2)}

      User is asking: "${userQuery}"

      Please provide a helpful, concise recommendation based ONLY on the catalog provided. 
      Mention specific features like climbing threshold (jumping), mopping capability, and price in GBP.
      Format your response with Markdown. Use bullet points where appropriate.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: context,
      });

      return response.text || "I'm sorry, I couldn't generate a recommendation at this time.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I encountered an error while trying to help. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
