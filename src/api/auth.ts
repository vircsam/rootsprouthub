import { apiRequest } from './client';

export type AuthUser = {
  id: number;
  name: string;
  email: string;
};

export type AuthResponse = {
  user: AuthUser;
  token: string;
};

export async function register(name: string, email: string, password: string) {
  const data = await apiRequest<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
  localStorage.setItem('rs_token', data.token);
  return data;
}

export async function login(email: string, password: string) {
  const data = await apiRequest<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem('rs_token', data.token);
  return data;
}

export async function getMe() {
  return apiRequest<AuthUser>('/users/me', {}, true);
}

export function logout() {
  localStorage.removeItem('rs_token');
}
