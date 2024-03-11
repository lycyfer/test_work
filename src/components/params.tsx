import React, { Component } from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
    colors: string[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    model: Model;
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            model: props.model
        };
    }

    handleChange = (paramId: number, value: string) => {
        this.setState(prevState => ({
            model: {
                ...prevState.model,
                paramValues: prevState.model.paramValues.map(paramValue => {
                    if (paramValue.paramId === paramId) {
                        return { ...paramValue, value };
                    }
                    return paramValue;
                })
            }
        }));
    }

    getModel = (): Model => {
        return this.state.model;
    }

    render() {
        return (
            <div>
                {this.props.params.map(param => (
                    <div key={param.id}>
                        <label>{param.name}</label>
                        <input
                            type="text"
                            value={this.state.model.paramValues.find(paramValue => paramValue.paramId === param.id)?.value || ''}
                            onChange={event => this.handleChange(param.id, event.target.value)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamEditor;