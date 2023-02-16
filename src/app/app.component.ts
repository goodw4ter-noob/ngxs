import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store'
import { Observable, Subscription } from 'rxjs';
import { SimpleValueState } from './state/simple-value.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Select(SimpleValueState.value) value$!: Observable<number>;

}
