import { IDL, query, update } from "azle";
import sharedService from "../declarations/sharedService.js";

export default class {
  message: string = "Hello,";

  @query([IDL.Principal], IDL.Nat)
  public getUserId(userPrincipal: string): number {
    return sharedService.getUserId(userPrincipal);
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
