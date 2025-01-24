import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { code, language, input } = req.body;

    const compilerResponse = await axios.post("http://localhost:8000/compile", {
      code,
      language,
      input,
    });

    res.status(200).json(compilerResponse.data);
  } catch (error) {
    console.error("Compilation error:", error);
    res.status(500).json({
      error: error instanceof Error ? error.message : "Compilation failed",
    });
  }
}
