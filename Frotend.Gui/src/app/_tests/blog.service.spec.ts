import { TestBed, getTestBed } from "@angular/core/testing"
import { BlogService } from "../_services/blog.service";
import { Article } from "../_models/article";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { environment } from "src/environments/environment";

describe('mock article tests', () => {
    let injector: TestBed;
    let blogService: BlogService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BlogService]
        });
        injector = getTestBed();
        blogService = injector.get(BlogService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create article', async () => {
        const article: Article = {
            heading: 'Testarticel',
            summary: 'This is the summary of the article',
            text: {
                blocks: [{
                    type: 'paragraph',
                    data: null
                }],
            time: new Date(),
            version: 'v1'
            },
            tags: ['test', 'angular']
        };
        blogService.saveArticle(article).subscribe();

        const req = httpMock.expectOne({ url: environment.apiUrl + '/article', method: 'POST'});
        expect(req.request.method).toBe("POST");
        expect(req.request.body).toBeDefined();
    });
});
