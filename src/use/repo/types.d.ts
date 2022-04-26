export interface CloneInfoItem{
  timestamp: string
  count: number
  uniques: number
}

export interface CloneInfo{
  count: number
  uniques: number
  clones: CloneInfoItem[]
}
