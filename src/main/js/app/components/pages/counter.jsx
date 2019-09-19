import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage, injectIntl} from 'react-intl';
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    Input
} from 'reactstrap';

export class CounterLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idPlayer: '',
            idTeam: ''
        };
    }

    render () {
        const {idPlayer, idTeam} = this.state;
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Input type="text" name="player" id="idPlayer"
                                   value={idPlayer}
                                   onChange={value => this.setState({idPlayer: value.target.value})}/>
                            <br/>
                            <Input type="text" name="team" id="idTeam"
                                   value={idTeam}
                                   onChange={value => this.setState({idTeam: value.target.value})}/>
                            <br/>
                            <Button color="primary">
                                <FormattedMessage id='app.user.table.add'/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default injectIntl(CounterLayout);