import cookie from "/assets/gingerbreadsml.png";

export default function Cookie({ click }) {
  return (
    <>
      <button onClick={click}>
        <img className="gingerbread" src={cookie} alt="a gingerbread man" />
      </button>
    </>
  );
}
