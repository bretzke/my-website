import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container-app flex max-sm:flex-col gap-4 max-sm:gap-8">
      {Array.from({ length: 2 }).map((_, index) => (
        <Card className="max-sm:w-full w-2/4" key={index}>
          <CardHeader className="relative h-56 p-0">
            <Skeleton className="w-full h-56" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2 p-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-3.5 w-48" />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
