export type Message = {
  id: number,
  content: string,
  sendedAt: Date
}

export type MessageComponent = {
  id: number,
  content: React.ReactNode,
  sendedAt: Date
}