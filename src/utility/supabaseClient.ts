import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://lafkugajngwkszrkirrm.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZmt1Z2Fqbmd3a3N6cmtpcnJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNDQ3NzcsImV4cCI6MTk5NTcyMDc3N30.W0HGwMgVR2IOAg2RYE8JmUh_KhydZuYsIG9XOsFxv4I";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
