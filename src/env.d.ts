/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module 'sanitize-html';
declare module 'dompurify';

interface ImportMetaEnv {
    readonly PUBLIC_SUPABASE_URL: string
    readonly PUBLIC_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
