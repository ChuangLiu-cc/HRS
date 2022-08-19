import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';


@Component({
    selector: 'app-result-list',
    templateUrl: './result-list.component.html',
    styleUrls:['./result-list.component.css']
})

export class ResultListComponent {
    @Input() searchResults: any;
    @Input() noSearchResults: any;
    displayedColumns: string[] = ['name', 'phone', 'email', 'note'];

    constructor(private dialog: MatDialog) { };

    public popReservationDialog(result: any): void {
        //popup reservation 
        const dialogRef = this.dialog.open(ReservationFormComponent, {
            width: '1200px',
            data: result||null,
        });
      
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}