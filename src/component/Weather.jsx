const Weather = ({temp}) => {

    if(temp < 15){
        return <h1>it's cold outside.</h1>
    }else if((temp > 15) && (temp < 25)){
        return <h1>it's nice Outside.</h1>
    }else{
        return <h1>it's hot outside.</h1>
    }

};

export default Weather;