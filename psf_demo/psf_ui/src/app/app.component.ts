import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ClipsComponent } from './components/clips/clips.component';
import { DataTablesModule } from 'angular-datatables';
import { ClipTableComponent } from './components/clip-table/clip-table.component';
import { RecordingComponent } from './components/recording/recording.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, 
            CommonModule, 
            HeaderComponent, 
            RouterOutlet, 
            ClipsComponent, 
            DataTablesModule, 
            ClipTableComponent, 
            RecordingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'psf_ui';
}
