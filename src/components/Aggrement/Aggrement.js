import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAggrement, selectContent, selectStatus } from "../../redux/aggrement/aggrementSlice";
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';
import "./styled.scss";

function Aggrement() {
    const dispatch = useDispatch();

    const aggrement = useSelector(selectContent);
    const status = useSelector(selectStatus);

    React.useEffect(() => {
        if (status === "idle") {
            dispatch(getAggrement());
        }
    }, [dispatch, status]);


    if(status === "loading") {
        return <Spinner />
    }else if(status === "failed") {
        return <Error />
    }
    return (
        <div className="main-wrapper--aggrement">
            <h3>Sözleşme</h3>
            <div dangerouslySetInnerHTML={{__html: aggrement}} className='aggrement--inner' />
        </div>
    )
}

export default Aggrement