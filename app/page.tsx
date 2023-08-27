import ExpenseBarChart from '@/components/bar-chart'
import ChartSummary from '@/components/chart-summary'

export default function Home() {
	return (
		<main className='h-screen lg:grid place-content-center'>
			<div className='px-4 space-y-4 lg:space-y-6 py-16 lg:w-[540px]'>
				<ChartSummary title='My balance' value='$921.48' />
				<ExpenseBarChart />
			</div>
		</main>
	)
}
