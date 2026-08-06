import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import UserList from "./component/UserList";
import ProductList from "./component/ProductList";



function App(){
  return (
    <>
      {/* <Header />
      <MainContent />
      <Footer /> */}

      {/* <h1>List of Users</h1> */}
      {/* <UserList /> */}

      {/* 
      <h1>List of Products</h1>
      <ProductList /> */}

      <Child name = "nitin" age = {22} status = "single" obj = {[{like : "cars", dislike : "nothing"}]} />
      
    </>
  );

}


const Child  = ({name, age, status, obj}) => {
    return(
      <>
        <div>
          <h1>name : {name}</h1>
          <h2>age : {age}</h2>
          <h2>status: {status} </h2>
          <h3>obj : {
            obj.map((obj1, index) => (
              <div key={index}>
                <h1> like : {obj1.like} </h1>
                <h1>dislike : {obj1.dislike}</h1>
              </div>
            ))
            }</h3>
        </div>
      </>
    );
};

export default App;