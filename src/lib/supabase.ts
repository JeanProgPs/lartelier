// ============================================================
// L'Atelier Rio — Cliente Supabase
// Configure as variáveis em .env.local
// ============================================================
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/** Cliente Supabase para uso no frontend (chave anônima — segura) */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Faz upload de imagem para o Supabase Storage
 * @returns URL pública da imagem ou null em caso de erro
 */
export async function uploadImage(
  file: File,
  bucket: string,
  path: string
): Promise<string | null> {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true });

  if (error) {
    console.error('Erro no upload:', error.message);
    return null;
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
