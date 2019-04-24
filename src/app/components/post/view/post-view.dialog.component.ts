import { Component, Inject } from '@angular/core';
import { Post } from '../../../models/Post';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-post-view',
    templateUrl: './post-view.dialog.component.html',
    styleUrls: ['./post-view.dialog.component.scss']
})
export class PostViewDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<PostViewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public post: Post) {
    }
}
