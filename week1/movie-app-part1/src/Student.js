export default function Student(props){
    const {name,age}=props;
    return(
        <>
        <h1>Hello {name}</h1>
        <p>You are {age} years old</p>
            <hr />
        </>
    )
}