import "https://deno.land/x/dotenv/load.ts";

export const DB_HOST = Deno.env.get("DB_HOST") || "";
export const DB_NAME = Deno.env.get("DB_NAME") || "";
export const DB_USER = Deno.env.get("DB_USER") || "";
export const DB_PASS = Deno.env.get("DB_PASS") || "";
