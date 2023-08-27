import Logo from '@/public/logo.svg'
import Image from 'next/image'

interface ChartSummaryProps {
	title: string
	value: string
}
const ChartSummary = ({ title, value }: ChartSummaryProps) => {
	return (
		<div className='bg-softRed p-5 rounded-xl flex justify-between items-center text-white'>
			<div className='space-y-1'>
				<p className='text-sm lg:text-lg'>{title}</p>
				<p className='text-2xl font-bold lg:text-3xl'>{value}</p>
			</div>
			<Image src={Logo} alt='Logo' className='object-contain w-auto' />
		</div>
	)
}
export default ChartSummary
