import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PetService } from '../services-pet';
import { Pet } from '../interface-pet';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-profile-page',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './pet-profile-page.html',
  styleUrl: './pet-profile-page.scss',
})
export class PetProfilePage implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private petService = inject(PetService);

  pet: any;
  isEditing = false;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Ищем питомца с ID из URL:', id);

    this.petService.getPets().subscribe((allPets) => {
      this.pet = allPets.find((p) => String(p.id) === String(id));
      console.log('Результат поиска (теперь должен быть):', this.pet);
      this.cdr.detectChanges();
    });
  }

  toggleEdit() {
    if (this.isEditing) {
      this.saveChanges();
    }
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    this.petService.updatePet(this.pet).subscribe({
      next: (updatedPet) => {
        console.log('Saved successfully:', updatedPet);
        this.isEditing = false;
      },
      error: (err) => {
        console.error('Error saving pet:', err);
        alert('Failed to save changes');
      },
    });
  }
}
