import { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Blogs from './Blogs';
import { GlobalContext } from '../../context/GlobalState';
import { Nav, Button, Container } from 'react-bootstrap';


const Home = () => {
    const { blogs, error, Logout, getBlogs } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [allblogs, setBlogs] = useState([])

    function bringingAll() {
        if (!document.cookie) {
            navigate('/login')
        }
        else {
            getBlogs()
            setBlogs(blogs)
        }
    }
    
    useEffect(() => {
        // allBlogs();
        console.log('vikash');
        bringingAll()
    }, [allblogs, blogs])


    return (
        <>
            <p>{error}</p>
            <Nav variant="pills" defaultActiveKey="/" className="justify-content-center gap-5 m-3" >
                <Nav.Item>
                    <Button onClick={() => navigate('/profile')}>Post Blog</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={() => { Logout(); setTimeout(() => navigate('/login'), 3000) }}>Logout</Button>
                </Nav.Item>
            </Nav>
            <Container className='App-header' style={{ marginTop: '5vh' }}>
                {
                    allblogs.length > 0 &&
                    allblogs.map(ele => (<Blogs key={ele.id} blogs={ele} />))
                }
            </Container>
        </>
    )
}

export default Home