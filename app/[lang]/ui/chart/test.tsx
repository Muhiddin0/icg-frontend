import React, { useEffect, useRef } from "react";

const TradingViewWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if the TradingView script has already been loaded
    if (!document.getElementById("tradingview-widget-script")) {
      const script = document.createElement("script");
      script.id = "tradingview-widget-script";
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = initializeWidget;
      document.head.appendChild(script);
    } else {
      // Initialize the widget if the script is already loaded
      initializeWidget();
    }

    function initializeWidget() {
      if (window.TradingView && widgetRef.current) {
        new window.TradingView.widget({
          symbol: "LME:CA1!", // Specify your symbol here
          interval: "D", // Set the time interval (e.g., "D" for daily)
          container_id: widgetRef.current.id,
          width: "100%",
          height: 500,
          timezone: "Etc/UTC",
          theme: "light",
          style: "1", // Style type (1 = candles)
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_legend: true,
          save_image: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: [],
        });
      }
    }
  }, []);

  return (
    <div id="tradingview-widget" ref={widgetRef} style={{ height: "500px" }} />
  );
};

export default TradingViewWidget;
