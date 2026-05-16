import { createClient } from '@supabase/supabase-js'

// 빌드 시점에 환경 변수가 없을 경우를 대비해 더미 값을 기본값으로 설정합니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

