import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCTJph-MLdzmbFwF3JLgwSsarwyGd1q9tQ'
  }) ],
  exports:[MapComponent],
  providers: [MapService]
})
export class MapModule { }
