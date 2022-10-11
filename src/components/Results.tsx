
type resultsPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Result = (props: resultsPropsType) => {
    return(
        <div>
            {props.results.country && <div>{props.results.country}</div>}
        </div>
    );
};

export default Result;