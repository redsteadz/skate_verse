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
        <Carousel className="bg-black w-[calc(100vw-6rem)]">
          <CarouselContent className="shrink">
            <CarouselItem className="flex justify-center items-center">
            <Pcard/>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
            <Pcard/>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
            <Pcard/>
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
        <div className="hidden justify-start items-center sm:flex w-[90vw] overflow-y-auto">
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
