import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useGetProduct(url) {
    const [data, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log("Axios Res: ", res.data);
                setProduct(res.data);
            })
            .catch(err => {
                console.log("Axios Err: ", err);
            });
    }, [url]);
  return (
    [ data ]
  )
}
