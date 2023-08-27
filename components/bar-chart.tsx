'use client'

import data from '@/data.json'
import {
	Bar,
	BarChart,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from 'recharts'

interface Payload {
	name: string
	value: string
}
interface CustomToolTipProps {
	active?: boolean
	label?: string
	payload?: Payload[]
}
const CustomTooltip = ({ active, payload }: CustomToolTipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className='p-2 bg-darkBrown rounded-md text-paleOrange'>
				<p className='text-lg font-bold'>${payload[0].value}</p>
			</div>
		)
	}

	return null
}

const getMaxValue = () => {
	return data.reduce((max, current) => {
		return current.amount > max ? current.amount : max
	}, -Infinity)
}

const ExpenseBarChart = () => {
	const maxValue = getMaxValue()

	return (
		<div className='bg-paleOrange rounded-xl px-5 py-6 lg:px-10 lg:py-8'>
			<h1 className='text-darkBrown text-2xl font-bold lg:text-3xl'>
				Spending - Last 7 Days
			</h1>
			<div className='mt-14 lg:mt-16 w-full h-[180px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<BarChart data={data}>
						<XAxis
							dataKey='day'
							tickLine={false}
							axisLine={false}
							className='text-xs lg:text-sm text-mediumBrown'
						/>
						<Tooltip content={<CustomTooltip />} />
						<Bar
							dataKey='amount'
							radius={[5, 5, 5, 5]}
							className='cursor-pointer'>
							{data.map((item, index) => (
								<Cell
									key={`cell-${index}`}
									className={
										item.amount === maxValue
											? 'fill-cyan hover:fill-[#B4E0E5]'
											: 'fill-softRed hover:fill-[#FF9B86]'
									}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			<hr className='h-[2px] rounded-[1px] my-6 lg:my-8 bg-cream' />
			<div className='flex justify-between'>
				<div className='space-y-1'>
					<p className='text-sm text-mediumBrown lg:text-lg'>
						Total this month
					</p>
					<p className='font-bold text-3xl lg:text-5xl'>$478.33</p>
				</div>
				<div className='text-right self-end'>
					<p className='text-darkBrown text-sm font-bold lg:text-lg'>+2.4%</p>
					<p className='text-mediumBrown text-sm lg:text-lg'>from last month</p>
				</div>
			</div>
		</div>
	)
}
export default ExpenseBarChart
