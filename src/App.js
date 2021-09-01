import "./styles.css";
import React from "react";
import mse from "@adobe/magento-storefront-events-sdk";
import mse2 from "@adobe/magento-storefront-events-sdk";
import msc from "@adobe/magento-storefront-event-collector";

export default function App() {
  msc;
  React.useEffect(() => {
    window.magentoStorefrontEvents = mse;
    console.log("init");
    mse.context.setShopper({ shopperId: "logged-in" });
    mse.publish.pageView();
    mse2.context.setShopper({ shopperId: "logged-in" });
    mse2.publish.pageView();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
