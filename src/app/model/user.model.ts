export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public siret: string,
    public phone: string,
    public username: string) { }
}
