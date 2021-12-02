import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allItems = [
    {description : "Hit the gym", done : false},
    {description : "Pay bills", done : true},
    {description : "Meet George", done : false},
    {description : "Buy eggs", done : false},
    {description : "Read a book", done : false},
    {description : "Organize office", done : false}
  ];

  get items(){
    return this.allItems;
  }

  addItem(description: string) {
    if(description == "")
      alert("You must write something!");
    else{
      this.allItems.push({
        description,
        done: false
      });
    }
  }
  ifChecked(done: boolean){
    if(done == true)
      return "checked"
    else
      return ""
  }
  changeCheck(item: any){
    item.done = !item.done;
  }
  remove(index: number){
    this.allItems.splice(index, 1);
  }
}

