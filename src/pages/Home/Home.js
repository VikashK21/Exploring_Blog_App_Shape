import { useContext, useEffect } from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import Blogs from './Blogs';
import { GlobalContext } from '../../context/GlobalState';
import { Nav, Button, Container } from 'react-bootstrap';


const Home = () => {
    const { blogs, error, Logout, allBlogs } = useContext(GlobalContext);
    const navigate = useNavigate();
    function bringingAll() {
        if (!document.cookie) {
            navigate('/login')
        }
        else {
            allBlogs()
        }
    }

    useEffect(() => {
        bringingAll()
    })


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
                    blogs.length > 0 &&
                    blogs.map(ele => (<Blogs key={ele.id} blogs={ele} />))
                }
            </Container>
        </>
    )
}

export default Home