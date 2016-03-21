module MyJournal {
  export class Post {
    constructor (public title: string, public date: number, public body: string) {}
    wordCount() {
    return this.body.split(' ').length;
    }
  }
}



// CLASSES AND METHODS GO HERE (file:to-do-classes-interface.ts)
