import "./styles.css";
import React from "react";
import mse from "@adobe/magento-storefront-events-sdk";
import mse2 from "@adobe/magento-storefront-events-sdk";

export default function App() {
  React.useEffect(() => {
    // add mse to window
    window.magentoStorefrontEvents = mse;

    // msc must be initialized after mse is on window
    import("@adobe/magento-storefront-event-collector");

    // cannot reproduce duplicate contexts
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
