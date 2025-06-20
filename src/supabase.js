import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qyikzfhdkoziheftkexy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5aWt6Zmhka296aWhlZnRrZXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MDA1MzMsImV4cCI6MjA2NTk3NjUzM30.yp5yslDwaHs96YWFFUGGZ4g8pTbZXbpVattCSCAj7E8'

export const supabase = createClient(supabaseUrl, supabaseKey)
