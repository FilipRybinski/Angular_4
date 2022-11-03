export type Student = {
  name: string;
  surname: string;
  index_nr: number;
}

export class StudentClass {

  oceny=[];
  stypendium:number=0;
  srednia =this.getSrednia();
  constructor(private name: string, private surname: string, private index_nr: number) {

  }

  get Name(): string {
    return this.name
  }

  set Name(name: string) {
    this.name = name;
  }

  get Surname(): string {
    return this.surname
  }

  set Surname(surname: string) {
    this.surname = surname;
  }

  get Index_nr(): number {
    return this.index_nr;
  }

  set Index_nr(index_nr: number) {
    this.index_nr = index_nr;
  }
  getSrednia(){
    let tmp;
    this.oceny.forEach((e)=>{tmp+=tmp;})
    tmp=tmp/this.oceny.length;
    return tmp;
  }
}