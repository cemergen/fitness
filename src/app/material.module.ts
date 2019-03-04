import { NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule,MatFormFieldModule,MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatButtonModule, 
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
    ],
    exports: [
        MatButtonModule, 
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ],
    providers: [],
})

export class MaterialModule { }