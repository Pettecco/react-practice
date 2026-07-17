import type { HackerNewsArticle } from '../types';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchTopStories(): Promise<number[]> {
  const response = await fetch(`${BASE_URL}/topstories.json`);
  return response.json();
}

export async function fetchStory(id: number): Promise<HackerNewsArticle> {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);
  return response.json();
}
