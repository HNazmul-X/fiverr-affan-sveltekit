
<script>
import { blogData } from "../../data/blog_data";
console.log(blogData)

</script>


<div class="col-lg-4">
    <div class="blog-list">
      <p class="heading">Related posts</p>
      {#each blogData.slice(0,3) as blog (blog.title)}
      <div class="boxed-layout-60">
        <p class="title">{blog.title}</p>
        <div class="footer">
            <p class="date">{blog.date}</p>
          <a href="#">Read More</a>
        </div>
      </div>
      {/each }
     
    </div>
  </div>