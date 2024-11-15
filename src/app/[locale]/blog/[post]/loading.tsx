import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 pb-4 bg-secondary">
      <header>
        <Skeleton className="w-full max-sm:h-64 max-md:h-96 max-lg:h-[500px] h-[600px] relative bg-background rounded-none" />
      </header>

      <section className="container-app flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-96" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-10" />
            <Skeleton className="h-5 w-80" />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-1">
            <Skeleton className="h-[18px] w-10" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Skeleton className="h-[30px] w-3/4" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[98%]" />
              <Skeleton className="h-4 w-[96%]" />
              <Skeleton className="h-4 w-[94%]" />
              <Skeleton className="h-4 w-[50%]" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
