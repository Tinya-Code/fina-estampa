import type { Category } from './category.model';

export interface Block {
  id: string;
  categories: Category[];
}
