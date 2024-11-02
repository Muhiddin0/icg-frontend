import React from "react";
import SectionTitle from "../common/section-title/section-title";
import { useTranslations } from "next-intl";
import TradingViewWidget from "./test";

function Chart() {
  const t = useTranslations("home.chart");

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle title={t("title")} desk={t("description")} />
        <div
          data-aos="fade-up"
          className="h-[500px] w-full bg-white shadow-xl rounded-3xl overflow-hidden"
        >
          <iframe
            title="symbol overview TradingView widget"
            lang="en"
            id="tradingview_2e683"
            frameBorder={0}
            // @ts-ignore
            allowTransparency="true"
            scrolling="no"
            src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22COPPER%22%2C%22COPPER%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%200)%22%2C%22fontColor%22%3A%22%23787B86%22%2C%22widgetFontColor%22%3A%22rgba(216%2C%20216%2C%20216%2C%201)%22%2C%22scalePosition%22%3A%22no%22%2C%22scaleMode%22%3A%22Normal%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22%232962FF%22%2C%22topColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22bottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22fontFamily%22%3A%22Trebuchet%20MS%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22valuesTracking%22%3A%221%22%2C%22dateFormat%22%3A%22dd%2FMM%2Fyyyy%22%2C%22timeHoursFormat%22%3A%2224-hours%22%2C%22lineWidth%22%3A1%2C%22showFloatingTooltip%22%3Atrue%2C%22page-uri%22%3A%22primexbt.com%2Fprice-chart%2Fcommodities%2Fcopper%22%2C%22utm_source%22%3A%22primexbt.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D"
            style={{
              margin: "0px !important",
              padding: "0px !important",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Chart;
