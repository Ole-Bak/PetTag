import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from './interface-pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  public pets: any[] = [];
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/pets';

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiUrl}/add`, pet);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.patch<Pet>(`${this.apiUrl}/${pet.id}`, pet);
  }

  deletePet(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
