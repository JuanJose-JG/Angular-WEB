import { Component, OnInit, signal } from '@angular/core';
import { BookService } from '../services/book-service';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../modal/modal';

@Component({
  imports: [],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book implements OnInit {
  protected searchQuery = signal('');
  protected isLoading = signal(false);

  constructor(public bookService: BookService, private _matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  searchBooks() {
    const query = this.searchQuery().trim();
    this.getBooks(query || 'angular');
  }

  getBooks(query: string = 'angular') {
    this.isLoading.set(true);

    this.bookService.getBooks(query).subscribe({
      next: (data) => {
        this.bookService.books.set(data.items || []);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.isLoading.set(false);
      }
    });
  }

  bookDetail(book: any) {
    this._matDialog.open(Modal, {
      data: book
    });
  }
}