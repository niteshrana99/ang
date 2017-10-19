import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http:Http) {}
    // storeBookdetails(books:any[]) {
    //    return this.http.post('https://lib-http-ng.firebaseio.com/bookdetails.json',books);
    // }
    getBookDetails(): Promise<any>{
        // let key = [];
        // return this.http.get('https://lib-http-ng.firebaseio.com/bookdetails.json')
        //         .toPromise()
        //         .then((response)=>{
        //             console.log(response.json());
        //             const data = Object.values(response.json());
        //             return Promise;
        //         })

        let promise = new Promise((resolve,reject)=>{
           return this.http.get('https://lib-http-ng.firebaseio.com/bookdetails.json')
                .toPromise()
                .then((res)=>{
                    const data = Object.values(res.json());
                    resolve(data[0])
                })
                
        })
        return promise;

            // .map((response: Response)=>{
            //     const data = Object.values(response.json());
            //         console.log(data)
            //         key.push(data)
            //         console.log(key)
            //         return key[0]
                    
            // })
    }
}