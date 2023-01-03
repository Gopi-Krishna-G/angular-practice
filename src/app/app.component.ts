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
  info = '';

  onClickSubmit(formData) {
    if (formData.book == 'true') {
      this.books_data.push(formData);
      this.info = ' A book is added to collection ';
    } else if (formData.book == 'false') {
      this.songs_data.push(formData);
      this.info = ' A song is added to collection ';
    } else {
      this.info = 'what do you need to add ? A book? or a song ? ';
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
