var posts=["2024/09/16/基于Typora的Markdown文档语法及操作/","2024/10/15/深度学习分类模型的训练与测试脚本/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };