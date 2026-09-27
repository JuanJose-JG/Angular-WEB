import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

interface BookResponse {
    items: any[];
}

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private API_KEY = environment.apiKey;
    books = signal<any[]>([]);

    constructor(private http: HttpClient) { }

    getBooks(query: string = 'angular') {
        const searchQuery = query.trim() || 'angular';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&maxResults=20&key=${this.API_KEY}`;
        return this.http.get<BookResponse>(url);
    }
}
