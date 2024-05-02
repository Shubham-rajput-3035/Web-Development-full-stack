function HandleFormSubmit(event) {
  event.preventDefault();
  console.log("Form Was Submitted ");
}

export default function Form() {
  return (
    <form onSubmit={HandleFormSubmit}>
      <input type="text" placeholder="Write Something Text" />
      <button>Submit </button>
    </form>
  );
}
