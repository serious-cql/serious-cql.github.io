var posts=["2024/07/20/hello-world/","2024/09/16/基于Typora的Markdown文档语法及操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };