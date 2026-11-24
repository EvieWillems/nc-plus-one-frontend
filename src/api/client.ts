import type { FetchArgs } from "../types/types";


export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export default async function apiGet <T>(path:string, args?:FetchArgs):Promise<T> {
    
  const response = await fetch(path,args?args:undefined);

  if (!response.ok) {
      throw new ApiError('problem connecting to API',500);
  };

  return await(response.json()) as T
}