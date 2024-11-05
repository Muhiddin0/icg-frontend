"use client";

import React, { useState } from "react";

function ShopPage() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    function handleSubmit() {
        if (firstName && lastName && email && phone && companyName && address) {
            alert("Muvaffaqiyatli yuborildi");
        }
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-3xl font-semibold">Shop</h1>
                <div className="grid grid-cols-12 gap-3">
                    <label className="col-span-6" htmlFor="">
                        <p>Ism</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>Familya</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>Gmail</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label className="col-span-6" htmlFor="">
                        <p>Tel</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>

                    <label className="col-span-full" htmlFor="">
                        <p>Korxonangiz nomi</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </label>
                    <label className="col-span-full" htmlFor="">
                        <p>Addres</p>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>

                    <div className="col-span-full">
                        <button
                            onClick={handleSubmit}
                            className="btn btn-primary w-full"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopPage;
