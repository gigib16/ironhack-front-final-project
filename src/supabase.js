import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://behfcnnjwxgeyszvcvyk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlaGZjbm5qd3hnZXlzenZjdnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE1NDI1NDQsImV4cCI6MTk3NzExODU0NH0.0VZGYG2njNZ3iDxtuwj4_R-O9alGZ8oWs5IKJd--zzE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
