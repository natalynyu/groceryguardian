import React from 'react'
import ReactDOM from 'react-dom'

function GroceryForm() {
    return (
        <form>
            <input type="text" name="groceryname" placeholder="What'd you get?" required></input>
            <input type="text" name="quantity" placeholder="How many?" required></input>
            <input type="submit" value="Add to Pantry"/>
        </form>
    )
}

export default GroceryForm