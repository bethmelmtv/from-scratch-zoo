
export default function OpenSign({ isOpen }) {
  return (
    <p>
      {isOpen && 'Were Open!'}
      {!isOpen && 'Were Closed!'}
    </p>
  );
}