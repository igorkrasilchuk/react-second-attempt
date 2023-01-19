const Rickandmorty = ({rickandmorty}) => {
    const {id, name, status, species, image}= rickandmorty;
    return (
        <div>
            <h3>id:{id}</h3>
            <h1>name:{name}</h1>
            <h2>status:{status}</h2>
            <h2>species:{species}</h2>
            <img src={image}    alt={name}/>
        </div>
    );
};

export default Rickandmorty;