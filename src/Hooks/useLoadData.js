import { useEffect, useState } from "react";


const useLoadData = () => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, []);
    return [loadData, setLoadData];

}

export default useLoadData;