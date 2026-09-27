import { Component, OnInit, signal } from '@angular/core';
import { BookService } from '../services/book-service';

@Component({
  imports: [],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book implements OnInit {
  protected searchQuery = signal('');

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  searchBooks() {
    const query = this.searchQuery().trim();
    this.getBooks(query || 'angular');
  }

  getBooks(query: string = 'angular') {
    this.bookService.getBooks(query).subscribe({
      next: (data) => {
        this.bookService.books.set(data.items || []);
        console.log(this.bookService.books());
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}