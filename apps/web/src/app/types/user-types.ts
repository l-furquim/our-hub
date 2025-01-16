export type User = {
  id: string
  email: string,
  name: string,
  password: string,
  createdAt: Date,
};

export type UserAuth = {
  id: string | undefined,
  name: string | undefined
}
