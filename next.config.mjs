/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'yzldumjsikdcvhvippif.supabase.co',
				pathname: '/storage/v1/object/**',
			},
		],
	},
}

export default nextConfig
