import SelectedCategory from '@/app/components/SelectedCategory';

export default function StructureRoute() {
  return (
    <>
      <div className="mx-auto w-3/5">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describe for your Home?
        </h2>
      </div>
      <form>
        <SelectedCategory />
      </form>
    </>
  );
}
