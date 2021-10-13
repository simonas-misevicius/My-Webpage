export default function RealForm() {
  return (
    <form action="#/query">
      <input name="str" type="text" placeholder="color title..." required />
      <input name="num" type="number" required />
      <button>ADD</button>
    </form>
  );
}
