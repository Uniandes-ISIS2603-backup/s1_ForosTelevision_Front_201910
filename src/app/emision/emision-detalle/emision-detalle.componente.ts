/**
* Imports
*/
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmisionService } from '../emision.service';
import { EmisionDetail } from '../emision-detail';

@Component({
    selector: 'emision-detail',
    templateUrl: './emision-detail.component.html',
    styleUrls: ['./emision-detail.component.css']
})
export class EmisionDetailComponent implements OnInit {

    /**
    * Detalle de la emisión
    */
    @Input() emisionDetail: EmisionDetail;
    
    /**
    * Constructor 
    */
    constructor(
        private route: ActivatedRoute,
        private emisionService: EmisionService 
    ) { }

    /**
    * El id de la emision que viene en el path
    */
    emision_id: number;
    
    /**
    * The method which obtains the author whose details we want to show
    */
    getAuthorDetail(): void {
        this.authorService.getAuthorDetail(this.author_id)
            .subscribe(authorDetail => {
                this.authorDetail = authorDetail
            });
    }
   
    /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
    ngOnInit() {
        this.author_id = +this.route.snapshot.paramMap.get('id');
        if (this.author_id){
        this.authorDetail = new AuthorDetail();
        this.getAuthorDetail();
        }
    }
}