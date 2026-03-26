import { apiRequest } from './client';
import type { Post } from './posts';

export async function getFeed() {
  return apiRequest<Post[]>('/feed');
}
