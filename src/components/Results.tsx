
type resultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Result = ({ results }: resultsPropsType) => {
    const { country, cityName, temperature, conditionText, icon } = results; 
    return(
        <>
            {country && 
                <div className="results-country">{country}</div>
            }
            {cityName && 
                <div className="results-city">{cityName}</div>
            }
            {temperature && 
                <div className="results-temp">{temperature}<span>℃</span></div>}
            {conditionText && 
                <div className="results-condition">
                    <img src={icon} alt="icon"/>
                    <span>{conditionText}</span>
                </div>}
        </>
    );
};

export default Result;