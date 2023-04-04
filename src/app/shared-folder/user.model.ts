export class User {
  constructor(
    public email: string,
    public localId: string,
    private idToken: string,
    private tokenExpirationDate: Date
  ) {}
  get tokenValue() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {

      return null;
    }

    return this.idToken;
  }
}
