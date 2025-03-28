import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wykcrrqsrohyydqeboxy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5a2NycnFzcm9oeXlkcWVib3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NzUwMDcsImV4cCI6MjA1NzQ1MTAwN30.C4ZScd0xWfcJ-s57kH7K1uU2nVx55s8RFxHn2pujaKY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
