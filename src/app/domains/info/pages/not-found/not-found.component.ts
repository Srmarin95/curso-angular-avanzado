import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './not-found.component.html',
  standalone: true,
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {}
