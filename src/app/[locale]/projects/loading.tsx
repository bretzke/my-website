import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container-app flex flex-col gap-4">
      <Card className="p-6 flex flex-col gap-6">
        <Skeleton className="w-full h-96 m-auto" />

        <div className="flex flex-col gap-2">
          <Skeleton className="w-28 h-6" />

          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </Card>
    </section>
  );
}