// import { Component, inject } from '@angular/core';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../auth';
// import { PetService } from '../services-pet';

// @Component({
//   selector: 'app-navbar',
//   imports: [RouterLink],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.scss',
// })
// export class Navbar {
//   public petService = inject(PetService);
//   isMenuOpen = false;
//   protected auth = inject(AuthService);
//   private router = inject(Router);
//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   handleLogout() {
//     this.auth.logout();
//     this.isMenuOpen = false;
//     this.router.navigate(['/']);
//   }
// }

import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';
import { PetService } from '../services-pet';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  protected auth = inject(AuthService);
  private router = inject(Router);
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLogout() {
    this.auth.logout();
    this.isMenuOpen = false;
    this.router.navigate(['/']);
  }

  protected petService = inject(PetService);

  ngOnInit() {
    // Загружаем данные один раз при старте сайта
    this.petService.getPets().subscribe();
  }
}
