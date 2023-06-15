import React from 'react';
import PropTypes from 'prop-types';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import HeaderNote from '../components/fragements/HeaderNote';
import AddNote from '../components/fragements/AddNote';

function NewNoteWrapper({ logout, userName }) {
  const navigate = useNavigate();

  return <NewNote navigate={navigate} userName={userName} logout={logout} />;
}

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.addButtonNoteHandler = this.addButtonNoteHandler.bind(this);
  }

  onInputChangeHandler(title) {
    this.setState(() => {
      return {
        title,
      };
    });
  }

  onInputBodyChangeHandler(body) {
    this.setState(() => {
      return {
        body,
      };
    });
  }

  addButtonNoteHandler() {
    addNote(this.state);
    this.props.navigate('/');
  }

  render() {
    return (
      <>
        <HeaderNote logout={this.props.logout} userName={this.props.userName} />
        <main>
          <section className="add-new-page__input">
            <AddNote titleChange={(title) => this.onInputChangeHandler(title)} bodyChange={(body) => this.onInputBodyChangeHandler(body)} addNote={this.addButtonNoteHandler} />
          </section>
        </main>
      </>
    );
  }
}

NewNote.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};

export default NewNoteWrapper;
