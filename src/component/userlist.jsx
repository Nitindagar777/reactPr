function Userlist(){

const data = [
  {id : 1, name : "nitin", age : 22},
  {id : 2, name : "rounak", age : 22}
];


return(
    <div>
        {data.map((user) => (
            <div key={Math.random()}>
                <h2>{user.id}</h2>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
            </div>
        ))}
    </div>
);


}

export default Userlist;