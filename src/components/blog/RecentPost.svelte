<script>
    import RecentBlogCard from "./../../shared/Cards/RecentBlogCard.svelte";
    import { blogData } from "../../data/blog_data";
    console.log(blogData);
</script>

<div class="col-lg-4">
    <div class="blog-list">
        <p class="heading">Related posts</p>
        {#each blogData.slice(0, 3) as blog}
            <RecentBlogCard data={blog} />
        {/each}
    </div>
</div>
