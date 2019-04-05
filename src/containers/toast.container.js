import React from 'react';
import PropTypes from 'prop-types';
import Toast from '../components/toast.component';

const propTypes = {};

const defaultProps = {};

export default class ToastContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false
        }
    }
    componentDidUpdate() {
    }

    componentDidMount() {
        console.log(this.state.mounted);
        this.setState({
            mounted: true
        })
        this.handleTime();
    }

    handleTime = () => {
        console.log('start');
        setTimeout(() => {
            this.setState({
                mounted: false
            })
        }, 3000);
        console.log('finish');
    }


    render() {
        return (
            // <div style={{transition: 'all 0.3s', opacity: `${this.state.mounted ? 1 : 0}`}}>
                <Toast {...this.props} mounted={this.props.mounted} />
            // </div>

        );
    }
}

 ToastContainer.propTypes = propTypes;
 ToastContainer.defaultProps = defaultProps;



