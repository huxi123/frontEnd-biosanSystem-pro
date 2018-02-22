import React, { Component } from 'react';

import {Button} from 'monkeyui';

class PhysicalDownload extends Component {
    constructor(props){
        super(props);
        this.state={
            urlDownloads:''
        }
    this.download = this.download.bind(this);
    }
    download(){
        let {patient_id} = this.props.patiendIdData.data;
        let urlDownloads = '';
        let timestamp = Date.parse(new Date());
        timestamp = timestamp/1000;
        urlDownloads = '../down/downCaseSummary?patient_id=' + patient_id + "&timestamp="+timestamp;
        this.setState({urlDownloads:urlDownloads});
    }
    render() {
        return (
            <div style={{display:'inline-block'}}>
            <Button onClick={this.download}>导出图表</Button>
            <iframe
                style={{display:'none'}}
                src={this.state.urlDownloads}
            >
            </iframe>
        </div>
        );
    }
}

export default PhysicalDownload;