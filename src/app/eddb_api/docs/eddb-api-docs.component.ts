import { Component, HostBinding } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IInputSpec } from '../../swagger_ui/swagger-ui.component';

@Component({
    selector: 'app-eddb-api-docs',
    templateUrl: './eddb-api-docs.component.html'
})
export class EddbApiDocsComponent {
    @HostBinding('class.u-main-container') mainContainer = true;
    specs: IInputSpec[];
    constructor() {
        this.specs = [
            {
                versionName: 'V1',
                specLocation: '/api/eddb/v1/api-docs.json'
            },
            {
                versionName: 'V2',
                specLocation: '/api/eddb/v2/api-docs.json'
            },
            {
                versionName: 'V3',
                specLocation: '/api/eddb/v3/api-docs.json'
            }
        ]
    }
}
