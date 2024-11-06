"use client";

import About from "./ui/about/about";
import Chart from "./ui/chart/chart";
import ContactSection from "./ui/contact/contact-section";
import Hero from "./ui/hero/hero";
import LatestNews from "./ui/latest-news/latest-news";
import SplideCarousel from "./ui/partners/partners";
import ProductsList from "./ui/products/products";

export default function Home() {
    return (
        <>
            <Hero />
            <Chart />
            <About />
            <ProductsList />
            <SplideCarousel />
            <LatestNews />
            <ContactSection />
        </>
    );
}
