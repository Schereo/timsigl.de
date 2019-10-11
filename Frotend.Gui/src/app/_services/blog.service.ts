import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BlogEntry } from "../_models/blogEntry";
import { environment } from "src/environments/environment";


@Injectable()

export class BlogService{

    constructor(private http: HttpClient) {}

    getAllBlogEntries(){
        this.http.get<BlogEntry[]>(environment.apiUrl + '/blogentries').subscribe(
            (blogEntries) => {
                console.log(blogEntries)
            });
    }
}