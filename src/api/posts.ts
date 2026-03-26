import { apiRequest } from './client';

export type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
  groupId?: number | null;
  createdAt: string;
  updatedAt: string;
  author?: {
    id: number;
    name: string;
    email: string;
  };
};

export async function listPosts() {
  return apiRequest<Post[]>('/posts');
}

export async function getPost(id: number) {
  return apiRequest<Post>(`/posts/${id}`);
}

export async function createPost(title: string, content: string, groupId?: number) {
  return apiRequest<Post>(
    '/posts',
    {
      method: 'POST',
      body: JSON.stringify({ title, content, groupId }),
    },
    true
  );
}

export async function updatePost(id: number, updates: Partial<Pick<Post, 'title' | 'content'>>) {
  return apiRequest<Post>(
    `/posts/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(updates),
    },
    true
  );
}

export async function deletePost(id: number) {
  return apiRequest<void>(
    `/posts/${id}`,
    {
      method: 'DELETE',
    },
    true
  );
}
