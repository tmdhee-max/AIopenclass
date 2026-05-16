import ObserveForm from "@/components/ObserveForm";

export const dynamic = 'force-dynamic';

export default function ObserveFormPage({ params }: { params: { period: string, classId: string } }) {
  return <ObserveForm params={params} />;
}
