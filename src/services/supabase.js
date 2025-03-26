import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://njggudjcvwoybscehghn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZ2d1ZGpjdndveWJzY2VoZ2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTk4NzgsImV4cCI6MjA1ODU3NTg3OH0.qfU_YPNlrrFlyOon7uJJI4zFamX8GHiOYS1Pknpyf-w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
