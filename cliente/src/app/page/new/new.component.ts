import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  private form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router
  ) { });
}

ngOnInit(): void {
}

}
