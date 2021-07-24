import { useEffect, useState } from "react"
import axios from "axios"
import { GET_CRYPTO } from "../../Config/index"

export default function CryptoBox () {
    const [infocrypto,setInfocrypto] = useState([])

    useEffect(()=>{
        axios.get(`${GET_CRYPTO}`)
        .then((result)=>{
            setInfocrypto(result.data)
        })
        .catch(e=>console.log(e))
    },[])
    
    return (
        <div>
            <h2>Precios</h2>
            <div>
                {infocrypto?.map(c=>{
                    return (
                        <div key={c.symbol}>
                            <span>{c.symbol}</span>
                            <span>{(c.quote.USD.price).toFixed(2)}</span>
                            <span>%{(c.quote.USD.percent_change_24h).toFixed(2)}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}