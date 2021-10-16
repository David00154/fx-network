const { createClient } = require("@supabase/supabase-js");
const SUPABASE_KEY = "";
const SUPABASE_URL = "";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
