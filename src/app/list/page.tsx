import React, { Suspense } from "react";
import Image from "next/image";
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Skeleton from "@/components/Skeleton";

const List = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-produts"
  );

  return (
    <div className="px-4 md:px-6 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPING */}
      <div className=" hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            By Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={Skeleton()}>
        <ProductList
          categoryId={
            cat.collection?._id || "eb322161-d841-b663-f7a1-5ca8d7877719"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default List;
