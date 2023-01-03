import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {}
  values = [];
  books_data = [];
  songs_data = [];
  listArr = [];
  myProperty = 'true';

  onClickSubmit(formData) {
    if (formData.book == 'true') {
      this.books_data.push(formData);
    } else {
      this.songs_data.push(formData);
    }

    console.log(formData);
  }
  removeBook(index: number) {
    this.books_data.splice(index, 1);
  }
  removeSong(index: number) {
    this.songs_data.splice(index, 1);
  }
  addvalue() {
    this.values.push({ value: '' });
  }

  private selectedLink: string = 'song';
  setradio(e: string): void {
    this.selectedLink = e;
  }
  isSelected(name: string): boolean {
    if (!this.selectedLink) {
      return false;
    }
    return this.selectedLink === name;
  }
}
