import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Expenses Chart Component',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Created using Next JS, Tailwind CSS and recharts',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${dm_sans.className} min-h-screen bg-cream`}>
				{children}
			</body>
		</html>
	)
}
