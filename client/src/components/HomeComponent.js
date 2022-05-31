import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='container mt-4 home text-center align-self-center'>
                <br />
                <br />
                <br />
                <div className='row mt-3 darkbg text-center justify-content-center'>
                    <h1 align='center'> Welcome to Book Nook</h1>
                </div>
                <div className='row darkbg'>
                    <br />
                    <br />
                    <h6>
                        Book Nook is a Virtual Book Club which is run and
                        managed by 2 students at FAST-NUCES. The passion for
                        literature, writing and storytelling runs deep for both
                        Fateh Ali Amir and Amel Aamer, the founders of Book
                        Nook. Book Noo running a book club by moving the
                        operations and activities online and reducing the
                        distances among the members. If you are passionate about
                        books, reading or writing, this is the perfect place for
                        you to be. Are you not a member? Click on the button
                        below to Join us
                        <br />
                        <br />{' '}
                    </h6>
                </div>
                <div className='row darkbg justify-content-center'>
                    <br />
                    <br />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Home;
