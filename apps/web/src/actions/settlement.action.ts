"use server";
import { Settlement } from "../model";
import { sql } from "@vercel/postgres";

export async function createSettlement(
  settlement: Settlement
): Promise<Settlement> {
  return {} as any;
}

export async function getSettlements(): Promise<Settlement[]> {
  return {} as any;
}

export async function getSettlementById(
  id: string
): Promise<Settlement | undefined> {
  const query = sql`SELECT * FROM settlements WHERE id = ${id} LIMIT 1;`;
  const [settlement] = (await query).rows;
  return {} as any;
}

export async function updateSettlement(
  settlement: Settlement
): Promise<Settlement> {
  return {} as any;
}

export async function generateContratBySettlement(
  settlement: Settlement
): Promise<Settlement> {
  return {} as any;
}
