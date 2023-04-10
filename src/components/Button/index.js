import React from 'react'
import Default from './Default'

const Button = (props) => {

    const Buttons = {
        default: Default
    }
    
    const Component = Buttons[props.type]
    return <Component {...props} />

}

Button.defaultProps = {
    type: 'default'
}

export default Button