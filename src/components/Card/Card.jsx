import "./styles.css";
import homer from "-/data";

function Card() {
  return (
    <div className="card">
      <img
        className="avatar"
        src={homer.avatar}
        alt="Homer"
      />

      <h2>
        {homer.firstName} {homer.lastName}
      </h2>

      <p><strong>Профессия:</strong> {homer.job}</p>
      <p><strong>Хобби:</strong> {homer.hobby}</p>
    </div>
  );
}

export default Card;
