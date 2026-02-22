/**
 * AI Design Curator service for AYSHA Furniture & Electronics.
 * Provider-agnostic: uses configurable API endpoint via env.
 * No third-party SDK dependencies—plain fetch for flexibility.
 */

const SYSTEM_PROMPT = `You are the AI Design Curator for AYSHA Furniture & Electronics, a premier luxury furniture and electronics showroom in Kano, Nigeria. 
Your tone is sophisticated, welcoming, and knowledgeable. 
You specialize in:
1. High-end interior design combining Nigerian heritage with international modernism.
2. Integrating smart home electronics (audio, cinema, kitchens) seamlessly into furniture.
3. High-security storage solutions (luxury safes).
4. Materials like Nigerian Oak, Italian Marble, and Exotic Mahogany.
Keep your advice concise and elegant. Refer to our 'Showroom in Bompai, Kano' if someone wants to visit. The brand is 'AYSHA'.`;

// Fallback responses when no API is configured (works offline)
const FALLBACK_RESPONSES: Record<string, string> = {
  default: "Thank you for your interest in AYSHA. Visit our showroom in Bompai, Kano, for a private consultation with our master designers. We'd love to help you create your sanctuary.",
  design: "At AYSHA we blend Nigerian heritage with international modernism. Consider our Nigerian Oak collection or Italian marble dining sets for timeless elegance.",
  furniture: "Explore our Royal Velvet Sectional, Marquis Dining Set, and handcrafted teak pieces. Each is available for immediate delivery or bespoke customization.",
  electronics: "We offer 8K Cinema Displays, Tower Cooling Systems, and Crystal Cascade Lamps—all designed to integrate seamlessly with luxury interiors.",
  visit: "Our Bompai showroom is open for visits. Book a design session through our Contact page for a personalized consultation.",
  price: "For pricing and availability, please visit our showroom or contact us. We offer bespoke quotes for each piece.",
};

function getFallbackResponse(userPrompt: string): string {
  const lower = userPrompt.toLowerCase();
  if (lower.includes("design") || lower.includes("interior")) return FALLBACK_RESPONSES.design;
  if (lower.includes("furniture") || lower.includes("sofa") || lower.includes("chair") || lower.includes("table")) return FALLBACK_RESPONSES.furniture;
  if (lower.includes("tv") || lower.includes("electronics") || lower.includes("fan") || lower.includes("lamp")) return FALLBACK_RESPONSES.electronics;
  if (lower.includes("visit") || lower.includes("showroom") || lower.includes("location") || lower.includes("address")) return FALLBACK_RESPONSES.visit;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) return FALLBACK_RESPONSES.price;
  return FALLBACK_RESPONSES.default;
}

export const getDesignAdvice = async (
  userPrompt: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  const apiUrl = import.meta.env.VITE_AI_API_URL;
  const apiKey = import.meta.env.VITE_AI_API_KEY;

  // No API configured—use local fallback (fully offline, no external traces)
  if (!apiUrl || !apiKey) {
    await new Promise(r => setTimeout(r, 600)); // Brief delay for natural feel
    return getFallbackResponse(userPrompt);
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'default',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history.map(h => ({ role: h.role, content: h.parts[0]?.text || '' })),
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const text = data.choices?.[0]?.message?.content ?? data.text ?? data.response;
    return text || getFallbackResponse(userPrompt);
  } catch (error) {
    console.error('AI service error:', error);
    return "I'm having a bit of trouble connecting at the moment. You can visit our Bompai showroom or reach us through the Contact page—we'd be glad to assist you.";
  }
};
