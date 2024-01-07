import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Pcard from "./ProductCard";

function ProductSlide() {
  return (
    <>
      <div className="flex justify-center items-center sm:hidden">
        <Carousel className="w-40 h-40 bg-blue-200">
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center w-32 h-32 ">
              ...
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center w-32 h-32 ">
              ...
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center w-32 h-32 ">
              ...
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

function ProductDock() {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="hidden justify-start items-center sm:flex w-[90vw] bg-black overflow-y-scroll">
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>
            <Pcard/>

        </div>
      </div>
    </>
  );
}

function ProductStack() {
  return (
    <>
      <ProductSlide />
      <ProductDock />
    </>
  );
}

export default ProductStack;
