import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    jobs = {
        title: 'A title',
        arrivalTime: new Date()
    }
}