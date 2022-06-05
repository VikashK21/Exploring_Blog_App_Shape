import React, { useContext, useState } from 'react'
import { Container, Button, Form, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const CreateBlog = () => {
    const [blog, setBlog] = useState({title: '', post: ''});
    const { CreateBlog } = useContext(GlobalContext);
    const navigate = useNavigate();
    function postBlog(e) {
        e.preventDefault()
        CreateBlog(blog)
        setBlog({title: '', post: ''})
    }
    return (
        <div>
            <Nav variant="pills" defaultActiveKey="/" className="justify-content-center m-3" >
                <Nav.Item>
                    {/* <Nav.Link href="/">Home</Nav.Link> */}
                    <Button onClick={() => navigate('/')}>Home</Button>
                </Nav.Item>
            </Nav>

            <Container>
                <Form onSubmit={postBlog} className="d-grid gap-2">
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={(e) => setBlog(pre => ({ ...pre, title: e.target.value }))} placeholder='Blog Title...' value={blog.title} required /> <br />

                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Blog</Form.Label>
                        <Form.Control as='textarea' onChange={(e) => setBlog(pre => ({ ...pre, post: e.target.value }))} placeholder='Write a Blog...' value={blog.post} required />

                    </Form.Group>
                    <Button variant='success' type='submit' size="lg">Post</Button>
                </Form>
            </Container>

        </div>
    )
}

export default CreateBlog