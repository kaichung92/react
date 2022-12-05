export default function Body(props) {
  return (
    <div
      style={{
        width: "50rem",
        height: "50rem",
        backgroundImage: `url(${props.img})`,
      }}
      className="rounded mx-auto d-block"
    >
      <div
        style={{
          borderStyle: `solid`,
          backgroundColor: `white`,
          width: "20rem",
          height: "5rem",
        }}
        className="position-absolute top-50 start-50 translate-middle"
      >
        Manage a booking
      </div>
    </div>
  );
}
