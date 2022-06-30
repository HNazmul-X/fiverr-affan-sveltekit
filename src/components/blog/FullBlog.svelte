<script>
  import { singleBlogData } from "../../data/blog_data";
</script>

<div class="col-lg-8">
  <div class="recent-post">
    <h2 class="blog-title">
      {singleBlogData.title}
    </h2>
    {@html singleBlogData.description}
  </div>
</div>
