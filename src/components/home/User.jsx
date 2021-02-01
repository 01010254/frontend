import React, { Component } from 'react'
import './User.css'

import Button from '../buttons/Button'




export default class User extends Component {




    onChangeValue(e) {
        let quintanilha = 0
        console.log(e.target.value && e.target.name );
        if (e.target.name == 'Rodrigo'){
        const expr = e.target.value
        switch (expr) {
            case '1':
            // quintanilha ++
            // if()

            case '2':
            case '3':

              break;
            default:

          }
        }
       
      }



    render() {
        return (
            <div className="User">
                <div className="div-buttons" onChange={e => this.onChangeValue(e)}>
                    <Button value="1" label="Restaurant favorito" name={this.props.name} />
                    <Button value="2" label="Restaurant1" name={this.props.name} />
                    <Button value="3" label="Restaurant2" name={this.props.name} />
 

                </div>
            </div>
        )
    }
}
