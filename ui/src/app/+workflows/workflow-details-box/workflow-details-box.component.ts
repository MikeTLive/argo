import { Component, Input, OnChanges } from '@angular/core';

import { Workflow } from '../../models';

@Component({
    selector: 'ax-workflow-details-box',
    templateUrl: './workflow-details-box.html',
})
export class WorkflowDetailsBoxComponent {
    @Input()
    public workflow: Workflow;
}
