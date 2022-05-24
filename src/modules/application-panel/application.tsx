import { useState } from "react";
import { AccountServices } from "./AccontServices/accountServices";
import { AccountHeader } from "./AccountHeader/accountHeader";

export function Application() {

  let [showSensitiveInfo, setShowSensitiveInfo] = useState(true);

  function toggleInfo(value: boolean) {
    setShowSensitiveInfo(value);
  }

  return <div>
      <AccountHeader detectVisibility={toggleInfo} />
      <AccountServices visibility={showSensitiveInfo}/>
      
    </div>;
}