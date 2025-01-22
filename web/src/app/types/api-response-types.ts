import type { User } from "./user-types";

export type ApiResponse = {
  sucessMessage? : boolean,
  errorMessage?: string
};
export type ApiErrorResponse = {
  errorMessage: string,
  status: number,
  url: string
}
export type LoginResponse = {
  session: User,
  token: string
}
