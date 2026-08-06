const Gretting = ({isday}) => {

    // const morning = isday === "morning";
    // const afternoon = isday === "afternoon";
    // const night = isday === "night";

    // return(
    //     <div>
    //         {morning && <h1> good morning nitin.</h1>}
    //         {afternoon && <h1> good afternoon nitin.</h1>}
    //         {night && <h1> good night nitin.</h1>}
    //     </div>
    // );


    return(
        <div>
            {isday === "morning" && <h1> good {isday} nitin.</h1>}
            {isday === "afternoon" && <h1> good {isday} nitin.</h1>}
            {isday === "night" && <h1> good {isday} nitin.</h1>}
        </div>
    );
}

export default Gretting;