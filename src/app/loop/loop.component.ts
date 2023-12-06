import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrl: './loop.component.css',
})
export class LoopComponent {
  data = [
    {
      country: 'France',
      continent: 'Europe',
      literacy: '70 percent',
      universities: 'public',
      funding: 300000,
      dropout: '60 percent',
      performance: 'good rating',
    },
    {
      country: 'Germany',
      continent: 'Europe',
      literacy: '90 percent',
      universities: 'public',
      funding: 1300000,
      dropout: '30 percent',
      performance: 'very good rating',
    },
    {
      country: 'Italy',
      continent: 'Europe',
      literacy: '80 percent',
      universities: 'public',
      funding: 1000000,
      dropout: '40 percent',
      performance: 'very good rating',
    },
    {
      country: 'Belgium',
      continent: 'Europe',
      literacy: '90 percent',
      universities: 'public',
      funding: 1700000,
      dropout: '20 percent',
      performance: 'very good rating',
    },
    {
      country: 'Norway',
      continent: 'Europe',
      literacy: '80 percent',
      universities: 'public',
      funding: 1000000,
      dropout: '40 percent',
      performance: 'very good rating',
    },
    {
      country: 'Sweden',
      continent: 'Europe',
      literacy: '90 percent',
      universities: 'public',
      funding: 1000000,
      dropout: '40 percent',
      performance: 'very good rating',
    },
    {
      country: 'Austria',
      continent: 'Europe',
      literacy: '90 percent',
      universities: 'public',
      funding: 1000000,
      dropout: '40 percent',
      performance: 'very good rating',
    },
  ];
}
