import { createClient } from '@supabase/supabase-js';
const supaKey = import.meta.env.VITE_SUPABASE_KEY;
const supaUrl = import.meta.env.VITE_SUPABASE_URL;


const supabaseUrl = supaUrl;
const supabaseKey = supaKey;

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
