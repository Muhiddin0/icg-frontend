import { ShoppingCart } from "lucide-react";
import React from "react";

function ExmptyBasker() {
    return (
        <div className="w-full col-span-full py-20 flex items-center justify-center flex-col gap-3">
            <ShoppingCart size={50} />

            <h1 className="text-3xl font-semibold">
                Savatchangizda maxsulotlar mavjud emas
            </h1>
        </div>
    );
}

export default ExmptyBasker;
