import { Link } from 'react-router-dom'
import React from 'react';
import './List.css';

function Home() {
    return (
        <>
            <main>
                <h1>Welcome to our HomePage</h1>
                <section className='Home'>
                    <div className='users'>
                        <h2>See our movies's list</h2>
                        <button> <Link to="/Movie" className="btn btn-primary">Movies</Link></button>
                    </div>
                </section>
            </main>

        </>

    );
}

export default Home;
