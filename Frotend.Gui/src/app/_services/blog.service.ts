import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../_models/article';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable()

export class BlogService {

    constructor(private http: HttpClient) {}

    getAllArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(environment.apiUrl + '/articles');
    }

    saveArticle(article: Article): Observable<Article> {
        return this.http.post<Article>(environment.apiUrl + '/article', article);
    }

    deleteArticle(id: string): Observable<Article> {
        return this.http.delete<Article>(environment.apiUrl + `/article/${id}`);
    }

    getMyArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(environment.apiUrl + '/articles/me');
    }

    getArticleByUrl(url: string): Observable<Article> {
        return this.http.get<Article>(environment.apiUrl + `/article/url/${url}`);
    }

}
