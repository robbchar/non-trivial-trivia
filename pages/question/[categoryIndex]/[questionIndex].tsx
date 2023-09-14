import { useRouter } from 'next/router';

export default function Question() {
  const { categoryIndex, questionIndex } = useRouter().query;

  return <span>question</span>;
}
