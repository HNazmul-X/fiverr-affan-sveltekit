<script>
	import SummeryCard from '../../components/optionFlow/SummeryCard.svelte';
	import optionFlowSummeryData from '../../data/optionFlowSummeryData.json';
	import Index from '../smart-flow/index.svelte';
</script>

<div class="option-flow-summary">
	<div class="input-fields">
		<div class="search">
			<input type="text" class="search-input with-icon" placeholder="Symbol Lookup" />
		</div>
	</div>
	<div class="summary">
		<div class="row">
			{#each optionFlowSummeryData as summery}
				<SummeryCard data={summery} />
			{/each}
		</div>
	</div>
</div>
<div class="option-flow-table">
	<div class="row">
		<div class="col-xl-8">
			<div class="table-wrapper">
				<div class="table-header">
					<div class="title">Realtime Option Flow</div>
					<div class="btn-block">
						<button>
							<i class="icofont-download" />
						</button>
						<button>
							<i class="icofont-question" />
						</button>
						<button>
							<i class="icofont-close" />
						</button>
					</div>
				</div>
				<div class="main-table">
					<table>
						<thead>
							<tr>
								<td>Time</td>
								<td>Ticker</td>
								<td>Exp</td>
								<td>Stike</td>
								<td>C/P</td>
								<td>Spot</td>
								<td>Details</td>
								<td>Type</td>
								<td>Prem</td>
								<td />
								<td>Score</td>
								<td>Sentiment</td>
								<td>Value</td>
							</tr>
						</thead>
						<tbody>
							{#each [...new Array(20)] as item, index}
								<tr class={index === 1 && 'highlighted'}>
									<td>04:05 PM</td>
									<td><span class="tag spy">SPY</span></td>
									<td>05/20/22</td>
									<td>419</td>
									<td>P</td>
									<td>427.77</td>
									<td><span class="detail-value">5,272</span></td>
									<td>SWEEP</td>
									<td><span class="prem-value">$4.4M</span></td>
									<td>
										<svg
											width="14"
											height="6"
											viewBox="0 0 14 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="3" cy="3" r="3" fill="#CED673" />
											<circle cx="11" cy="3" r="3" fill="#7BCDFC" />
										</svg>
									</td>
									<td>
										<div class="range-graph shade2">
											<div class="line">
												<span style="width: 40%;left: 10%;" />
											</div>
										</div>
									</td>
									<td><span class="tag bearish">Bearish</span></td>
									<td>Value</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xl-4">
			<div class="table-wrapper">
				<div class="table-header">
					<div class="title">Realtime Option Flow</div>
					<div class="btn-block">
						<button>
							<i class="icofont-download" />
						</button>
						<button>
							<i class="icofont-question" />
						</button>
						<button>
							<i class="icofont-close" />
						</button>
					</div>
				</div>
				<div class="main-table">
					<table>
						<thead>
							<tr>
								<td>Time</td>
								<td>Ticker</td>
								<td>Quantity</td>
								<td>Spot</td>
								<td>$MM</td>
								<td />
							</tr>
						</thead>
						<tbody>
							{#each [...new Array(20)] as item, index}
								<tr>
									<td>04:05 PM</td>
									<td><span class="tag dal">DAL</span></td>
									<td>1,672,920</td>
									<td>$42.36 </td>
									<td class="mm-value">$68M</td>
									<td>
										<svg
											width="22"
											height="6"
											viewBox="0 0 22 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												r="2.35714"
												transform="matrix(1 0 0 -1 19.6433 2.99979)"
												fill="#7D7D7D"
											/>
											<circle
												r="2.35714"
												transform="matrix(1 0 0 -1 10.9997 2.99979)"
												fill="#7D7D7D"
											/>
											<circle
												r="2.35714"
												transform="matrix(1 0 0 -1 2.35714 2.99979)"
												fill="#7D7D7D"
											/>
										</svg>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
