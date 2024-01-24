/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <button
      onClick={() => {
        console.log('this is invalid')
      }}
    >

    </button>
  );
}
