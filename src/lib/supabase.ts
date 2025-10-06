import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Storage bucket name
export const STORAGE_BUCKET = 'media-uploads'

// Storage utilities
export const uploadFile = async (file: File, path: string) => {
  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw error
  }

  return data
}

export const getPublicUrl = (path: string) => {
  const { data } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(path)

  return data.publicUrl
}

export const deleteFile = async (path: string) => {
  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .remove([path])

  if (error) {
    throw error
  }
}

export const listFiles = async (folder = '') => {
  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .list(folder, {
      limit: 100,
      offset: 0
    })

  if (error) {
    throw error
  }

  return data
}

// Media metadata utilities
export const getMediaMetadata = async (fileName: string, folder: string) => {
  const { data, error } = await supabase
    .from('media_metadata')
    .select('*')
    .eq('file_name', fileName)
    .eq('folder', folder)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data
}

export const updateMediaTitle = async (fileName: string, folder: string, title: string) => {
  const { data, error } = await supabase
    .from('media_metadata')
    .upsert({
      file_name: fileName,
      folder: folder,
      title: title,
      updated_at: new Date().toISOString()
    }, {
      onConflict: 'file_name,folder'
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export const deleteMediaMetadata = async (fileName: string, folder: string) => {
  const { error } = await supabase
    .from('media_metadata')
    .delete()
    .eq('file_name', fileName)
    .eq('folder', folder)

  if (error) {
    throw error
  }
}