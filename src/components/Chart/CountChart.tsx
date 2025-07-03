'use client'

import Image from 'next/image'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Total',
		count: 100,
		fill: 'white',
	},
	{
		name: 'Girls',
		count: 42,
		fill: '#FAE27C',
	},
	{
		name: 'Boys',
		count: 58,
		fill: '#C3EBFA',
	},
]

const CountChart = () => {
	return (
		<div className="bg-white rounded-xl w-full h-full p-4">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-semibold">Students</h2>
				<Image src="/moreDark.png" alt="More Options" width={20} height={20} />
			</div>

			{/* Chart */}
			<div className="w-full h-[75%] relative">
				<ResponsiveContainer>
					<RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
						<RadialBar background dataKey="count" />
					</RadialBarChart>
				</ResponsiveContainer>

				<Image src="/maleFemale.png" alt="students chart" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
			</div>

			{/* Footer */}
			<div className="flex items-center justify-center gap-16">
				<div className="flex flex-col items-center gap-1">
					<h3 className="font-bold flex items-center justify-between gap-2">
						<span className="size-5 bg-mSky rounded-full" />
						5,800
					</h3>
					<h4 className="text-xs text-gray-300">Boys (58%)</h4>
				</div>
				<div className="flex flex-col items-center gap-1">
					<h3 className="font-bold flex items-center justify-between gap-2">
						<span className="size-5 bg-mYellow rounded-full" />
						4,200
					</h3>
					<h4 className="text-xs text-gray-300">Girls (42%)</h4>
				</div>
			</div>
		</div>
	)
}

export default CountChart
