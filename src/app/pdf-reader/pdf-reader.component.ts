import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit {

  title: String = 'Task Details';
  tasks: Object[] = [
    {
      name: 'Instructions',
      link: 'http://localhost:4200/assets/instructions.pdf',
    },
    {
      name: 'Design',
      link: 'http://localhost:4200/assets/shape-calculator.pdf',
    }
  ];

  currentTask = 'http://localhost:4200/assets/instructions.pdf';

  constructor() { }

  ngOnInit() {
  }

}
