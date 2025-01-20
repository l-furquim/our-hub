export type Message = {
  id: number,
  content: string,
  sendedAt: Date,
  userId: string
}

export type MessageComponent = {
  id: number,
  content: React.ReactNode,
  sendedAt: Date,
  userId: string
}