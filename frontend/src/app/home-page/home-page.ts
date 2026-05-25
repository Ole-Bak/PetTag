import { Component } from '@angular/core';
import { PetDeserves } from './pet-deserves/pet-deserves';
import { HowItWorks } from './how-it-works/how-it-works';
import { WhyChoosePetTag } from './why-choose-pet-tag/why-choose-pet-tag';
import { HappyPetsAndOwners } from './happy-pets-and-owners/happy-pets-and-owners';
import { ProtectFriend } from './protect-friend/protect-friend';

@Component({
  selector: 'app-home-page',
  imports: [PetDeserves, HowItWorks, WhyChoosePetTag, HappyPetsAndOwners, ProtectFriend],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
