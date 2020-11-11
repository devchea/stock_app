import React, { useState, useEffect} from 'react'

const login = () => {
    const [ user, setUser ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const [ hasAccount, sethasAccount ] = useState(false)
    
    return (
        <div>
            <h1>login</h1>
        </div>
    )
}

export default login
