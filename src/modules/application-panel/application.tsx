import { AccountServices } from "./AccontServices/accountServices";
import { AccountHeader } from "./AccountHeader/accountHeader";

export function Application() {
  return <div>
      <AccountHeader/>
      <AccountServices/>
      
    </div>;
}