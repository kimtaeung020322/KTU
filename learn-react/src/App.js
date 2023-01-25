import Hello from "./Components/Hello";

function App() {
  return (
    <>
      <Hello title="React" color="yellow" />
      <Hello title="KTU" color="green" />
      <Hello>
        {/* props.children으로 전달된다. */}
        <p>자식요소입니다.</p>
      </Hello>
    </>
  );
}

export default App;
