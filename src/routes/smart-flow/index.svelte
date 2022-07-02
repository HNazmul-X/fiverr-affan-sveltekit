<script>
	import { each } from 'svelte/internal';

	let zoomed = false;
	let showDetails = false;

	// data for upper boxes
	const upperCheckboxes_data = [
		{
			label: 'RTH',
			name: 'rth',
			checked: true
		},
		{
			label: 'Historycal',
			name: 'historycal',
			checked: true
		},
		{
			label: 'value',
			name: 'value',
			checked: false
		},
		{
			label: 'value 2',
			name: 'value2',
			checked: false
		}
	];

	// data for second cheekboxes
	const grapAreaChackboxes = [
		{
			label: 'Lang Value',
			name: 'longValue',
			checked: true,
			backgrond: null
		},
		{
			label: 'Lang Value',
			name: 'longValue',
			checked: true,
			backgrond: null
		},
		{
			label: 'Lang Value',
			name: 'longValue',
			checked: true,
			backgrond: null
		},
		{
			label: 'Lang Value',
			name: 'longValue',
			checked: true,
			backgrond: null
		},
		{
			label: 'Lang Value',
			name: 'longValue',
			checked: true,
			backgrond: null
		}
	];
</script>

<!-- Svelte Header -->
<svelte:head>
	<title>SmartFlow || Bigshort Dashboard</title>
</svelte:head>

<div class="graph-area" class:info-active={showDetails} id="graph-area">
	<div class="boxed-layout">
		<div class="graph-top">
			<div class="filter-block">
				<div class="basic-filter">
					<div class="tabs style1">
						<div class="tab">5 Min</div>
						<div class="tab active">1 Hour</div>
						<div class="tab">Day</div>
					</div>
					<div class="checkboxes">
						<div class="checkbox-group">
							{#each upperCheckboxes_data as data}
								<div class="group">
									<input type="checkbox" name={data.name} checked={data.checked} id="" />
									<div class="data">{data.label}</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="input-fields">
					<div class="search">
						<input type="text" class="search-input with-icon" />
					</div>
					<div class="calender">
						<input type="date" class="calendar-input with-icon" />
					</div>
				</div>
			</div>
			<!-- Filter block ends here -->
			<div class="data-block">
				<div class="ranges-data">
					<div class="content-block">
						<p>
							<strong>Lorem ipsum dollar sit Amit</strong><br /><span class="sub"
								>Lorem ipsum dollar sit Amit:</span
							>
						</p>
						<p class="">
							<span class="higlight-number shade1">157.90</span> USD
							<span class="sub red">-6% (-3%)</span>
						</p>
					</div>
					<div class="graph-ranges">
						{#each [...new Array(3)] as c, i}
							<div class="range-graph shade{i + 2}">
								<div class="legends">
									<span>157.26</span>
									<span>DAYS RANGE</span>
									<span>166.02</span>
								</div>
								<div class="line">
									<span style="width: {i + 2}0%;left: {1}0%;" />
								</div>
							</div>
						{/each}
					</div>
				</div>
				<div class="graphs">
					<div class="live-updates-graph positive">
						<div class="heading">
							<svg viewBox="0 0 200 200">
								<path
									d="M0.999999 12C13.5289 5.0936 29.1118 1 46 1C62.8882 1 78.4711 5.0936 91 12"
									stroke="rgba(0,0,0,0)"
									fill="rgba(0,0,0,0)"
									stroke-opacity="0.26"
									stroke-width="2"
									stroke-linejoin="round"
									id="curve"
								/>

								<text width="100" style="transform: translate(25px, 30px);">
									<textPath xlink:href="#curve" class="fill-class"> Smart Flow </textPath>
								</text>
							</svg>
						</div>
						<div class="graph-block">
							<span class="value">64</span>
							<span class="dashed-line lines line1" />
							<span class="normal-line lines line2" />
							<span class="normal-line lines line3" />
							<span class="dashed-line lines line4" />
							<span class="bg-line lines line5" />
							<span class="bg-line lines line6" />
						</div>
					</div>
					<div class="live-updates-graph negative">
						<div class="heading">
							<svg viewBox="0 0 200 200">
								<path
									d="M0.999996 12C12.4152 5.0936 26.6129 1 42 1C57.3871 1 71.5848 5.0936 83 12"
									stroke="rgba(0,0,0,0)"
									fill="rgba(0,0,0,0)"
									stroke-opacity="0.26"
									stroke-width="2"
									stroke-linejoin="round"
									id="curve1"
								/>
								<text width="100" style="transform: translate(40px, 28px) rotate(7deg);">
									<textPath xlink:href="#curve1" class="fill-class"> SF Tally </textPath>
								</text>
							</svg>
						</div>
						<div class="graph-block">
							<span class="value">64</span>
							<span class="dashed-line lines line1" />
							<span class="normal-line lines line2" />
							<span class="normal-line lines line3" />
							<span class="dashed-line lines line4" />
							<span class="bg-line lines line5" />
							<span class="bg-line lines line6" />
						</div>
					</div>
				</div>
			</div>
			<!-- Data Block ends here -->
		</div>
	</div>

	<div class="main-graph-block" class:zoomed id="main-graph-block">
		<div class="top">
			<div class="legends">
				{#each grapAreaChackboxes as data}
					<div class="checkboxes">
						<div class="checkbox-group">
							<div class="group">
								<input type="checkbox" name={data.name} id={data.name} />
								<div class="data">
									Short Volume <span style="background-color: {data.backgrond || '#7A142A'};" />
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="handles">
				<div class="heading" on:click={() => (zoomed = !zoomed)}>
					<i class="icofont-ui-zoom-in" />
					<i class="icofont-ui-zoom-out" />
				</div>
				<div class="button-with-dropdown">
					<div class="heading">Indicators</div>
					<div class="drop-down">
						<div class="search-bar">
							<input type="text" class="search-input with-icon" placeholder="Search..." />
						</div>
						<div class="search-result">
							<div class="tags">
								<div class="tag">ABC</div>
								<div class="tag">ABC Result</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC Result</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC Result</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC Result</div>
								<div class="tag">ABC Result</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
								<div class="tag">ABC</div>
							</div>
						</div>
					</div>
				</div>
				<!--  onclick="showDetailedData()" -->
				<div class="heading hide-in-lg" on:click={() => (showDetails = !showDetails)}>Details</div>
			</div>
		</div>
		<div class="boxed-layout candle-graph-area">graph-area</div>
	</div>
	<!-- main-graph-block ends here -->
</div>
<!-- graph-area ends here -->
<div class="other-data-area" class:active={showDetails} id="other-data-area">
	<div class="boxed-layout">
		<div class="numeric-data">
			{#each [...new Array(20)] as data}
				<div class="boxed-layout-60"><p>Lorem ipsum: <span class="positive">70.08</span></p></div>
				<div class="boxed-layout-60"><p>Lorem ipsum: <span class="negative">-10.08</span></p></div>
			{/each}
		</div>
		<div class="numeric-data-2">
			{#each [...new Array(10)] as item}
				<div class="data">
					<p><strong>Smart Money Conviction</strong></p>
					<p class="sub">
						Momo Buying Power: 0.00
						<br />Momo Selling Power: 0.00
						<br /><strong>Momo Net Power: 0.00</strong>
					</p>
				</div>
			{/each}
		</div>
		<div class="key-stats">
			<div class="boxed-layout-60">
				<p><strong>Key Stats</strong></p>
				{#each [...new Array(4)] as c}
					<div class="data">
						<p class="sub">Stats Name:</p>
						<p class="sub"><strong>127.928M</strong></p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
<!-- other-data-area ends here -->
