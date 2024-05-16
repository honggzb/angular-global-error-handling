import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingDialogService } from "../../shared/loading-dialog/loading-dialog.service";
import { Observable, finalize, retry } from "rxjs";

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {
    constructor(private loadingDialogService: LoadingDialogService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingDialogService.openDialog();
        return next.handle(req).pipe(
            retry(1),                         //to retry all requests once before failing
            finalize(() => {
                this.loadingDialogService.hideDialog();
            })
        ) as Observable<HttpEvent<any>>;
    }
}