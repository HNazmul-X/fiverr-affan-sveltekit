<script>
import { singleBlogData } from "../../data/blog_data";

import RecentPost from "../../components/blog/RecentPost.svelte";
import FullBlog from "../../components/blog/FullBlog.svelte";

</script>


  <div class="blog-section boxed-layout">
    <div class="row">
      <FullBlog />
      <RecentPost />
    </div>
  </div>

