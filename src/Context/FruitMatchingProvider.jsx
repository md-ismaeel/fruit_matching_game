import React from 'react'
import { FruitMatchingContext } from './FruitMatchingContext'

export default function FruitMatchingProvider(props) {
    const [page, setPage] = React.useState(Number(1))
    return (
        <FruitMatchingContext.Provider value={{ page, setPage }}>
            {props.children}
        </FruitMatchingContext.Provider>
    )
}
