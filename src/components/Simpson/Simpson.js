const Simpson = ({simpson}) => {
    const {id, name, pic} = simpson;
    return (
        <div>
            <h2>{id} --- {name}</h2>
            <img src={pic} alt={name}/>
        </div>
    );
};

export {Simpson};