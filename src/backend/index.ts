import { IDL, query, update } from "azle";

export default class {
  message: string = "Hello,";
  private nextId: number = 0;
  private userIdMap: Map<string, number> = new Map();

  @query([IDL.Principal], IDL.Nat)
  public getUserId(userPrincipal: string): number {
    if (this.userIdMap.has(userPrincipal)) {
      return this.userIdMap.get(userPrincipal)!;
    } else {
      const newId = this.nextId;
      this.userIdMap.set(userPrincipal, newId);
      this.nextId += 1;
      return newId;
    }
  }

  @query([IDL.Text], IDL.Text)
  greet(name: string): string {
    return `${this.message} ${name}!`;
  }

  @update([IDL.Text])
  setMessage(message: string): void {
    this.message = message;
  }
}
