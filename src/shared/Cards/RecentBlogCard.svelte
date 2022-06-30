<script>
   export let  data = { title: "", date: "", href: "" };
</script>

<div class="boxed-layout-60">
    <p class="title">{data.title}</p>
    <div class="footer">
        <p class="date">{data.date}</p>
        <a href={data.href}>Read More</a>
    </div>
</div>
