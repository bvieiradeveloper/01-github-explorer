export interface repository{
  name: string,
  description: string, 
  html_url: string 
}

export interface repositories{
  repository: [repository]
}