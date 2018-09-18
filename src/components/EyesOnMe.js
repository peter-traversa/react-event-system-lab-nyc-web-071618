import React, { Component } from 'react';

class EyesOnMe extends Component {
    focusFn = () => {
        console.log('Good!')
    }
    blurFn = () => {
        console.log('Hey! Eyes on me!')
    }
    render() {
        return (
            <button onFocus={this.focusFn}
                onBlur={this.blurFn} />
        )
    }
}

export default EyesOnMe