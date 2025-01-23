export type Message = {
  id: number,
  content: string,
  sendedAt: Date,
  userId: string | null,
  userName: string
}

export type MessageComponent = {
  id: number,
  content: string,
  sendedAt: Date,
  user: string
}