import { useState, useEffect } from 'react';

const useFetch = ( url, authorization ) => {

    const [ dataList       , setDataList  ] = useState( null );
    const [ isPending      , setIsPending ] = useState( true );
    const [ isError        , setIsError   ] = useState( null );

    useEffect( () => {

        
        
        const requestOptions = {
            
            method  : 'GET',
            headers : { 
                'Content-Type'  : 'application/json',
                'Authorization' : `Bearer ${authorization}`
            }
        }
    
        fetch( url , requestOptions )
            .then( response => {
                if (response.ok){
                    return response.json();
                }
                else {
                    setIsPending( false );
                    setIsError( response.status )
                    throw Error( response.status );
                }
            })
            .then( data => {
                setDataList( data );
                setIsPending( false );
                setIsError( null )
            })
            .catch( error => {
                console.error(error)
                setIsPending( false );
            })

        },[ url ]);

    return { dataList, isPending, isError };
}
 
export default useFetch;