// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojlabpiiggitmeosnbkg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qbGFicGlpZ2dpdG1lb3NuYmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTI0NjksImV4cCI6MjAyODUyODQ2OX0.Hn_maAgQ4t4iGRc3VahjZnWb4jkmhN_uHsgdVQUPRNs'

export const supabase = createClient(supabaseUrl, supabaseKey)
