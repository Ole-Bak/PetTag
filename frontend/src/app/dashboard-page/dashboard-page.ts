import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth';
import { CommonModule } from '@angular/common';
import { PetService } from '../services-pet';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit {
  private petService = inject(PetService);
  private cdr = inject(ChangeDetectorRef);
  protected auth = inject(AuthService);
  myPets: any = [];

  ngOnInit() {
    this.petService.getPets().subscribe((data: any) => {
      console.log('Dostałem od bakenda:', data);
      this.myPets = [...data];
      this.cdr.detectChanges();
    });
  }

  deletePet(event: Event, id: string) {
    event.stopPropagation();

    if (confirm('Are you sure you want to delete this pet?')) {
      this.petService.deletePet(id).subscribe(() => {
        this.myPets = this.myPets.filter((pet: any) => pet.id !== id);
        this.cdr.detectChanges();
      });
    }
  }
}
