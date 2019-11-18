export interface Article {
    heading: string;
    summary: string;
    text: {
        blocks: {
            type: string,
            data: any
        }[];
        time: Date;
        version: string;
    };
    tags: string[];
    creator?: {
        name: string,
        email: string
    };
    _v?: number;
    _id?: string;
}
