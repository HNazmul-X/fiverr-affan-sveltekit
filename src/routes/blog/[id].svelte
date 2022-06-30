<script>
import { singleBlogData } from "../../data/blog_data";

import RecentPost from "../../components/blogPage/RecentPost.svelte";
import FullBlog from "../../components/blogPage/FullBlog.svelte";

</script>


  <div class="blog-section boxed-layout">
    <div class="row">
      <FullBlog />
      <RecentPost />
    </div>
  </div>

