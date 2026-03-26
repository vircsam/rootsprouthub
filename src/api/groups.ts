import { apiRequest } from './client';

export type Group = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export async function listGroups() {
  return apiRequest<Group[]>('/groups');
}

export async function createGroup(name: string, description?: string) {
  return apiRequest<Group>(
    '/groups',
    {
      method: 'POST',
      body: JSON.stringify({ name, description }),
    },
    true
  );
}
