import { Component } from '@angular/core';
import { OurMission } from './our-mission/our-mission';
import { OurStory } from './our-story/our-story';
import { MeetPack } from './meet-pack/meet-pack';

@Component({
  selector: 'app-about-us-page',
  imports: [OurMission, OurStory, MeetPack],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.scss',
})
export class AboutUsPage {}
