export default function Body(props) {
  return (
    <div
      style={{
        width: "100rem",
        height: "50rem",
        backgroundImage: `url(${props.img})`,
      }}
      className="img-fluid"
    ></div>
  );
}
