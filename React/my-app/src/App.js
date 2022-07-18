import { useState } from 'react';
import BlogPost from './componets/BlogPost';

function App() {
  const data = [
    {
      id: 0,
      title: "Blog Post 1",
      author: "MAN",
      content: "能够勇于尝试，当是青年人的基本功。维·格·别林斯基说过：“不前进就倒退，停滞状态是没有的。”"
    },
    {
      id: 1,
      title: "Blog Post 2",
      author: "WOMAN",
      content: "静水流深若无痕，花开花落应有声。时光在不经意间悄然飞去。长江后浪推前浪，那些勇于尝试，成就伟业的人，必将化作历史沙滩上的美丽的宝石。"
    },
    {
      id: 2,
      title: "Blog Post 3",
      author: "BOY",
      content: "凭栏望苍穹，念天地之悠悠，叹年华之易去。人生之旅有风有雨是常态，勇于尝试让我们风雨无惧。"
    },
  ]

  const [BlogPosts, setBlogPosts] = useState(data)

  function deletePost(id) {
    let newArray = BlogPosts.filter(post => post.id !== id)
    setBlogPosts(newArray)
  }

  return (
    <div>
      {BlogPosts.map((post, index) =>
        <BlogPost
          title={post.title}
          author={post.author}
          content={post.content}
          id={post.id}
          key={post.id}
          deletePost={deletePost}
        />)}
    </div>
  );
}

export default App;
