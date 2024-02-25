import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  
  constructor(
    private route:ActivatedRoute
  ) {}

  @Input()
  contentPhoto:string = "";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "";
  private id:string | null = "";
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id") 
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    if(result) {
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.contentPhoto = result.photo
    }
  }
    
}
