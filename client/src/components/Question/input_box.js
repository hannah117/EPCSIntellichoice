import React, { Component} from 'react';

export default class inputBox extends Component {
    constructor(props){
        super(props);
        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            topic: ''

        }

    }

    onChangeTopic(e){
        this.setState({
            topic: e.target.value
        });
        console.log(e.target.value);
    }
    


    onSubmit(e){
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(this);
        this.setState ({
            topic: ''

        })

    }
    render(){
        return (
            <div style={{marginTop: 20}}>
                <h3>Add new question</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label>Your Answer: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.topic}
                            onChange={this.onChangeTopic}/>
                    </div>
                    
                    <div className="form-group">
                        <input type="submit"
                               value="Check Answer"
                               className="btn btn-primary"/>

                    </div>
                </form>
            </div>
        )

    }





}