import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTerm: string = '';
  searchResults: any[] = []; // Replace 'any[]' with the type of your data

  // Mock data for demonstration
  data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Add more items as needed
  ];

  onSubmit() {
    // Implement your search logic here
    this.searchResults = this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
