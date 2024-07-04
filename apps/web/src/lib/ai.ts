import { ChatAnthropic } from "@langchain/anthropic";
import { VectorStore } from "@langchain/core/vectorstores";
import type { EmbeddingsInterface } from "@langchain/core/embeddings";
import { Document } from "@langchain/core/documents";
import { similarity as ml_distance_similarity } from "ml-distance";
import { VoyageEmbeddings } from "@langchain/community/embeddings/voyage";

import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";

const model = new ChatAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY as string,
});

export async function sendMessage(message: string) {
  const embeddingEngine = new VoyageEmbeddings({
    apiKey: process.env.VOYAGE_API_KEY, // In Node.js defaults to process.env.VOYAGEAI_API_KEY
    inputType: "document", // Optional: specify input type as 'query', 'document', or omit for None / Undefined / Null
  });

  const docs = await embeddingEngine.embedDocuments([
    `CANCELATION POLICY Deposit and Cancellation Policy A deposit of fifty
      percent (50%) of the total price is required to confirm a package at any
      of our lodges operated by the company or its subsidiaries. This deposit
      must be made within 10 days of the reservation date. The balance due shall
      be paid at least 60 days prior to the proposed arrival date.`,
  ]);

  console.log("DOCS", docs);

  //console.log(result);
  // const response = await model.invoke(message);
  // return response.content;
}
