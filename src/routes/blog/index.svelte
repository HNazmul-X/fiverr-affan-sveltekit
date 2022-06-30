<script>
import { blogData } from "../../data/blog_data";


   
</script>

<div class="blog-section boxed-layout blog-page">
  <div class="blog-list">
    <div class="row">
        {#each blogData as blog (blog.title)}
        <div class="col-xl-4 col-lg-6">
            <div class="boxed-layout-60">
              <p class="title">When to use smart flow instead of Ultraflow?</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <div class="footer">
                <p class="date">June 14, 2020</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        {/each}      
    </div>
  </div>
</div>

<style>
</style>
