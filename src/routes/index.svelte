<script>
	import RecentPost from '../components/blog/RecentPost.svelte';
	import FullBlog from '../components/blog/FullBlog.svelte';
	import TopTenTickers from './../components/dashboard/TopTenTickers.svelte';
</script>

<div class="top-lists-block">
  <div class="top-section" />
  <div class="top-lists">
    <TopTenTickers />
    <TopTenTickers />
    <TopTenTickers />
  </div>
</div>
<div class="blog-section boxed-layout">
  <div class="heading">Recent Blog Posts</div>
  <div class="row">
    <FullBlog />
    <RecentPost />
  </div>
</div>
