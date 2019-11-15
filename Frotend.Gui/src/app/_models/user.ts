export class User {

    constructor(
        public user: {
         _id: string,
         name: string,
         role: string,
         email: string,
         mailVerified: boolean
        },
        private _token: string

    ) {}

    get token() {
        return this._token;
    }

}
