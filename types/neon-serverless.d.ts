declare module '@neondatabase/serverless' {
  export function neon(
    connectionString: string
  ): <TRow = Record<string, unknown>>(
    strings: TemplateStringsArray,
    ...values: unknown[]
  ) => Promise<TRow[]>;
}
