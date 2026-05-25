import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PetService } from '../services-pet';

@Component({
  selector: 'app-add-tag-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-tag-page.html',
  styleUrl: './add-tag-page.scss',
})
export class AddTagPage {
  private cdr = inject(ChangeDetectorRef);
  private petService = inject(PetService);
  private router = inject(Router);

  handleRegisterTag(event: Event) {
    event.preventDefault();

    if (!this.petName) {
      alert('Please enter a pet name!');
      return;
    }
    const nameSlug = this.petName
      .toLowerCase()
      .trim()
      .replace(/[^\w\sа-яё-]/gi, '')
      .replace(/\s+/g, '-');

    const uniqueId = Date.now().toString().slice(-4);

    const newPet = {
      id: this.tagId,
      name: this.petName,
      species: this.selectedSpecies,
      breed: this.petBreed,
      age: Number(this.petAge),
      image: this.previewUrl || '',
      phone: this.phoneNumber,
      address: this.address,
      medicalNotes: this.medicalNotes,
      ownerName: this.ownerName,
    };
    console.log('Отправляем на сервер:', newPet);
    this.petService.addPet(newPet).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error('Ошибка при записи в БД:', err),
    });
  }

  petName: string = '';
  petBreed: string = '';
  petAge: number | null = null;
  selectedSpecies: string = 'dog';
  tagId: string = '';
  previewUrl: string | null = null;
  selectedFile: File | null = null;
  medicalNotes: string = '';
  ownerName: string = '';
  phoneNumber: string = '';
  address: string = '';
  ownerAddress: string = '';
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }

  selectSpecies(species: string): void {
    this.selectedSpecies = species;
    console.log('Selected species:', this.selectedSpecies);
  }
}
