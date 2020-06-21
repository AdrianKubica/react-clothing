export interface Directory {
  sections: DirectoryItem[]
}

export interface DirectoryItem {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
}
