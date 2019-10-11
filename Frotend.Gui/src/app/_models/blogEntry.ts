export class BlogEntry {

    constructor(
        public blocks: {
           type: string,
           data: Object
        },
        public time: Date,
        public version: string,
        public creator: {
            name: string,
            email: string
        },
        public tags: string[],       
    ){}
    
}