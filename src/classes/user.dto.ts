export class UserDto {
    id: number;
    ime: string;
    priimek: string;
    email: string;
    constructor(id: number, ime:string,priimek:string,email:string) {
        this.id = id;
        this.ime = ime;
        this.priimek = priimek;
        this.email = email;
    }
}