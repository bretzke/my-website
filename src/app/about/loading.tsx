import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container-app flex flex-col">
      <Skeleton className="w-48 h-9 bg-foreground m-auto" />
    </section>
  );
}
