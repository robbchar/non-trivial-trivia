import { useSearchParams } from 'next/navigation';

export default function Question() {
  const searchParams = useSearchParams();
  const categoryIndex = searchParams.get('categoryIndex');
  const questionIndex = searchParams.get('questionIndex');
  console.log({ categoryIndex, questionIndex });
  return <span>question</span>;
}
