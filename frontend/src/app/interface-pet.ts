export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age?: number | null;
  image?: string | null;
  ownerName?: string;
  phone?: string;
  tagId?: string;
  address?: string;
  medicalNotes?: string;
}
