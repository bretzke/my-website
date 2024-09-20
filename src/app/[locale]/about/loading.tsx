import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container-app flex flex-col gap-4">
      <Skeleton className="w-48 h-9 m-auto" />

      <div className="flex gap-4">
        <Skeleton className="w-14 h-14 rounded-full" />

        <div className="flex flex-col gap-4 grow">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-14" />
            <Skeleton className="h-5 w-60" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-72" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
              <Skeleton className="h-4 w-9/12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
