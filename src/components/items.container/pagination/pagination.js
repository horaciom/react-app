import React from 'react';
import ReactDOM from 'react-dom';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = { stepValue: 750, currentStep: 0, maxSteps: 0 };
    }

    componentWillReceiveProps(nextProps) {
        const steps = parseInt(nextProps.parentElement.clientHeight / this.state.stepValue) - 1;
        this.setState({ maxSteps: steps });
    }

    pageNext() {
        const val = -this.state.stepValue;
        const maxSteps = this.state.maxSteps;
        let currentStep = this.state.currentStep;
        if (currentStep < maxSteps) {
            currentStep++
            this.setState({ currentStep: currentStep });
            return this.props.setPagination(val);
        }
    }

    pagePrev() {
        let currentStep = this.state.currentStep;
        const val = this.state.stepValue;
        if (currentStep > 0) {
            currentStep--;
            this.setState({ currentStep: currentStep });
            return this.props.setPagination(val);
        }
    }

    render() {
        return (
            <div className="pagination-icons">
                <i className="material-icons base-state up" onClick={this.pagePrev.bind(this)}>keyboard_arrow_up</i>
                <i className="material-icons base-state down" onClick={this.pageNext.bind(this)}>keyboard_arrow_down</i>
            </div>
        )
    }
}

