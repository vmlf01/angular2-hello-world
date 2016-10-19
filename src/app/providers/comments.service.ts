import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CommentModel } from '../models';

// @Injectable() makes TypeScript generate metadata
// for this class, which allows us to use DI to
// inject dependencies into this class if needed
@Injectable()
export class CommentsService {
    private apiEndpoint: string = 'http://localhost:3000/api';

    constructor(private http: Http) {
    }

    /**
     * API will respond with format:
     * {
     *      data: [
     *          { "id": "1", "name": "aaaa", "email": "aaaa@bbbb", "message": "ccccccc" }
     *      ]
     * }
     */
    getComments() : Observable<CommentModel[]> {
        return null;
    }

    /**
     * API will respond with format:
     * {
     *      data: { "id": "1", "name": "aaaa", "email": "aaaa@bbbb", "message": "ccccccc" }
     * }
     */
    saveComment(comment: CommentModel): Observable<CommentModel> {
        return null;
    }

    private getHeaders(): Headers {
        return  new Headers({
            "Accept": "application/json"
        });
    }

    private handleServerError<T>(errorMessage): (any) => Observable<T> {
        return (error) => {
            // log server error to console
            console.log(errorMessage, error);

            // throw new error observable with our custom error message
            return Observable.throw(errorMessage);
        };
    }
}
