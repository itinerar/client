import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../models/Group';
import { User } from '../../models/User';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

    @Input() group: Group;
    @Output() remove = new EventEmitter<User>();

    constructor() {
    }

    ngOnInit() {
    }

}
