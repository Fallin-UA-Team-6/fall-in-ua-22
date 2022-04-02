import { createClient } from '@supabase/supabase-js'
import {browser} from "$app/env";





const supabase = createClient(
  browser ? import.meta.env.VITE_SUPABASE_URL : process?.env?.NEXT_PUBLIC_SUPABASE_URL,
  browser ? import.meta.env.VITE_SUPABASE_ANON_KEY : process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default supabase
