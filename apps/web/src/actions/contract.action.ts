"use server";

import { PrismaClient } from "@prisma/client";
import { sendMessage } from "../lib/ai";

const prisma = new PrismaClient();
export async function createContract(name: string) {
  const newContract = await prisma.contract.create({
    data: {
      name,
    },
  });

  console.log(newContract);
}

export async function generateContractDraft() {
  const result = await sendMessage("Who is the president of USA?");
  return result;
}
