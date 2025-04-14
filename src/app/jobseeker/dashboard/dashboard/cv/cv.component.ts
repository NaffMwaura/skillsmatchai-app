import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-cv',
  standalone: true, // ✅ Important for standalone components
  imports: [CommonModule], // ✅ Include NgIf (and others) via CommonModule
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedFile: File | null = null;
  analysisResult: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
      this.analysisResult = null;
    }
  }

  analyzeCv() {
    if (this.selectedFile) {
      this.analysisResult = `CV "${this.selectedFile.name}" analyzed: Great match for Frontend roles.`;
    }
  }
}
