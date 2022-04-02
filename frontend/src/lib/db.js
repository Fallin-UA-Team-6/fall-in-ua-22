import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL ?? process?.env?.NEXT_PUBLIC_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default supabase
