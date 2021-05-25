import React from 'react'


// const buttonStyle = {
//     cursor: 'pointer',
//     backgroundColor: 'black',
//     color: '#fff',
//     border: 0,
//     display: 'block',
//     fontSize: '16px',
//     padding: '15px',
//     width: '100%',
//     textTransform: 'upperCase',
//     borderRadius: '10px'
// }



const Button = ({color, text, width, outline, action}) => {

    const borderOutline = `1px solid ${color}`
    
    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: outline ? "white": color,
        color: outline ? color: '#fff',
        border: outline ? borderOutline : 0,
        display: 'block',
        fontSize: '16px',
        padding: '15px',
        width: width,
        textTransform: 'upperCase',
        borderRadius: '10px'
    }

    return (
        <button style={buttonStyle} onClick={action}>{text}</button>
    )
}

/* NOTE:::---> default props is used to create a default Props for
```when we don' provide Componenet js file.

*/
Button.defaultProps = {
    color: 'black',

}

export default Button
