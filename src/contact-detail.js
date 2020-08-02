import { autoinject } from "aurelia-framework";

@autoinject
export class ContactDetail {
  title;
  lastName;
  contact;
  
  save(){
    alert(JSON.stringify(this.contact));
  }
}
