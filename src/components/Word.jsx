import React from 'react';
import {connect} from 'react-redux';

class Word extends React.Component{
    constructor(props) {
        super(props);
        this.state = ''
    }
    render() {
        console.log(this.props);
        return (
            <div>
            {this.props.word.map(i => (
                <span key={i} onClick={(e) => this.selectCard(e, i)}>
                    <div >{this.props.values[i]}</div>
                    <p  >{i}</p>
                </span>)
            )}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(Word);