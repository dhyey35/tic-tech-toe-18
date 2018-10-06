import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '@shared';

@NgModule({
    imports: [
        CommonModule,
        GalleryRoutingModule,
        SharedModule,
    ],
    declarations: [GalleryComponent]
})
export class GalleryModule {}