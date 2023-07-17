export type IBook = {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
  reviews: number;
};


export type BookFilterableFields = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
  rating?: number;
  publicationDate?: string;
};
