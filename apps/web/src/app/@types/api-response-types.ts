export type ApiResponse = {
  sucessMessage? : boolean,
  errorMessage?: string
};
export type ApiErrorResponse = {
  errorMessage: string,
  status: number,
  url: string
}
