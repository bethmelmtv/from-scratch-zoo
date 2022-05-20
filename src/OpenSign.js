
export default function OpenSign({ isOpen }) {
  return (
    <p className= 'opensign'>
      {isOpen && 'Were Open!'}
      {!isOpen && 'Were Closed!'}
    </p>
  );
}