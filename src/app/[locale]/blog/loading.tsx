import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container-app flex">
      <Card className="w-2/4">
        <CardHeader className="relative h-56 p-0">
          <Skeleton className="w-full h-56" />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-3.5 w-48" />
        </CardContent>
      </Card>
    </section>
  );
}
