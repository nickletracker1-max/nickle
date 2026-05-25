import { Pool, PoolClient, QueryResult } from "pg";

let pool: Pool | undefined;

function createPool(): Pool {
  return new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });
}

function getPool(): Pool {
  if (!pool) {
    pool = createPool();
  }
  return pool;
}

export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<QueryResult<T>> {
  const p = getPool();
  let client: PoolClient | undefined;
  try {
    client = await p.connect();
    return await client.query<T>(text, params);
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  } finally {
    client?.release();
  }
}

export { getPool };
