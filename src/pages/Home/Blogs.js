import React, { useContext, useState } from 'react'
import '../../App.css'
import { GlobalContext } from '../../context/GlobalState';

const Blogs = ({ blogs }) => {
  const [reaction, setReaction] = useState({ liked: blogs.liked, disliked: blogs.disliked });
  const { Likes_Dislikes } = useContext(GlobalContext);
  console.log(blogs.user.name);
  return (
    <div className='flex'>
      {/* logger and reactions*/}
      <i className="fa fa-user-secret" style={{ fontSize: "48px", color: "grey" }}></i>
      <div>
        {blogs.likes} <br />
        <i className="fa fa-thumbs-up"
          onClick={() => {
            Likes_Dislikes(blogs.id, { likes: true, dislikes: false });
            setReaction(pre => ({ liked: !pre.liked, disliked: false }))
          }}
          style={{ fontSize: '36px', color: reaction.liked ? 'green' : 'white' }}></i> <br />
        <i className="fa fa-thumbs-down"
          onClick={() => {
            console.log(reaction, 'reactoins');
            Likes_Dislikes(blogs.id, { likes: false, dislikes: true });
            setReaction(pre => ({ disliked: !pre.disliked, liked: false }))
          }}
          style={{ fontSize: '36px', color: reaction.disliked ? 'orange' : 'white' }}></i> <br />
        {blogs.dislikes}
      </div>

      {/* Blogs and users */}
      <div style={{ border: '3px solid', marginLeft: '2vh', width: '95vh', paddingLeft: '1vh' }}>
        <i className="fa fa-user" style={{ fontSize: '48px', margin: '0.5rem' }}></i> {blogs.user.name}<hr />
        <h4 style={{ wordBreak: 'break-word' || 'break-all' }}>{blogs.title}</h4>
        <p style={{ wordBreak: 'break-word' || 'break-all' }}>{blogs.post}</p>
        <br />
      </div>
    </div>
  )
}

export default Blogs