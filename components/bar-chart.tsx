'use client'

import data from '@/data.json'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const ExpenseBarChart = () => {
	return (
		<div className='bg-paleOrange rounded-[20px] px-5 py-6 lg:px-10 lg:py-8'>
			<h1 className='text-darkBrown text-2xl font-bold'>
				Spending - Last 7 Days
			</h1>
			<ResponsiveContainer width='100%' height={350}>
				<BarChart data={data}>
					<XAxis
						dataKey='day'
						stroke='#888888'
						fontSize={12}
						tickLine={false}
						axisLine={false}
					/>
					<Tooltip />
					<Bar dataKey='amount' fill='#EC755D' radius={[5, 5, 5, 5]} />
				</BarChart>
			</ResponsiveContainer>
			<hr className='h-[2px] rounded-[1px] my-6 lg:my-8 bg-cream' />
			<div className='flex justify-between'>
				<div className='space-y-1'>
					<p className='text-sm text-mediumBrown lg:text-lg'>Total this month</p>
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
