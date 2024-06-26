import "./styles.css";

// Do not remove the export statement from Card Component.
//Refactor the given Card component.
 const Card = ({name,about}) => (
    <div className="card">
        <h3>Name: {name}</h3>
        <span>About: {about}</span>
    </div>
);

export default function App() {
    return <Card name="Pranav" about="About: Hi, my name is Pranav Yeole." />;
}
