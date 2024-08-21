export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}
