// services/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Replace with your project URL and anon key
const SUPABASE_URL = "https://YOUR_PROJECT_URL.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
