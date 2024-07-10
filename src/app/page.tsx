"use client"

import Head from "next/head";
import BestSellingProducts from "./components/BestSellingProducts";
import CallToAction from "./components/CallToAction";
import Channels from "./components/Channels";
import Hero from "./components/Hero";
import ProductTypes from "./components/ProductTypes";
import Testimonial from "./components/Testimonial";

export default function Page() {
    return (
        <div>
            <Head>
                <title>
                    EuroAutoParts อะไหล่รถยุโรป BMW Benz MINI คุณภาพดี ราคาย่อมเยาว์
                </title>
                <meta
                    name="description"
                    content="อะไหล่รถยนต์ BMW Benz MINI ทั้งภายในและภายนอก ราคาย่อมเยาว์ คุณภาพดี ส่งกทมใน 0-2 วัน ส่งตจว 1-3 วัน"
                    key="desc"
                />
            </Head>
            <Hero />
            <BestSellingProducts />
            <Channels />
            <ProductTypes />
            <Testimonial />
            <CallToAction />
        </div>
    )
}